import request from 'request-promise-native';
import { formatError } from 'graphql';
import { url, port } from './auth-ms/server';

const AUTH_URL_LOGIN = `http://${url}:${port}/login`;

/**
 * Creates a request following the given parameters
 * @param {string} url
 * @param {string} method
 * @param {string} token
 * @param {object} [body]
 * @param {object} [auth]
 * @param {boolean} [fullResponse]
 * @return {Promise.<*>} - promise with the error or the response object
 */
export async function generalRequest2(url, method, body, token, fullResponse) {
	const parameters = {
		method,
		uri: encodeURI(url),
		body,
		auth: {'bearer':token},
		json: true,
		resolveWithFullResponse: fullResponse
	};
	if (process.env.SHOW_URLS) {
		// eslint-disable-next-line
		console.log(url);
	}
	try {
		return await request(parameters);
	} catch (err) {
		return err;
	}
}

export async function generalRequest(url, method, body, fullResponse) {
	const parameters = {
		method,
		uri: encodeURI(url),
		body,
		json: true,
		resolveWithFullResponse: fullResponse
	};
	if (process.env.SHOW_URLS) {
		// eslint-disable-next-line
		console.log(url);
	}
	try {
		return await request(parameters);
	} catch (err) {
		return err;
	}
}

/**
 * Adds parameters to a given route
 * @param {string} url
 * @param {object} parameters
 * @return {string} - url with the added parameters
 */
export function addParams(url, parameters) {
	//let queryUrl = `${url}?`;
	let queryUrl = `${url}`;
	for (let param in parameters) {
		// check object properties
		if (
			Object.prototype.hasOwnProperty.call(parameters, param) &&
			parameters[param]
		) {
			if (Array.isArray(parameters[param])) {
				queryUrl += `${param}=${parameters[param].join(`&${param}=`)}&`;
			} else {
				queryUrl += `${param}=${parameters[param]}&`;
			}
		}
	}
	return queryUrl;
}

/**
 * Generates a GET request with a list of query params
 * @param {string} url
 * @param {string} path
 * @param {object} parameters 
 * @return {Promise.<*>}
 */
export function getRequest(url, path, parameters) {
	//const queryUrl = addParams(`${url}/${path}`, parameters);
	const queryUrl = addParams(`${url}`, parameters);
	return generalRequest(queryUrl, 'GET');
}

export async function getRequestProtected(url, path, token, username, parameters) {
	const auth_ans = await generalRequest2(`${AUTH_URL_LOGIN}/${username}`, 'GET', undefined, token);
	if(auth_ans.message === 'Tienes acceso'){
		const queryUrl = addParams(`${url}`, parameters);
		return generalRequest(queryUrl, 'GET');
	}else{
		throw formatErr('401!');
	}
}

export async function generalRequestProtected(url, path, token, username, parameters) {
	const auth_ans = await generalRequest2(`${AUTH_URL_LOGIN}/${username}`, 'GET', undefined, token);
	if(auth_ans.message === 'Tienes acceso'){
		return generalRequest(url, path,parameters);
	}else{
		throw formatErr('401!');
	}
}

/**
 * Merge the schemas in order to avoid conflicts
 * @param {Array<string>} typeDefs
 * @param {Array<string>} queries
 * @param {Array<string>} mutations
 * @return {string}
 */
export function mergeSchemas(typeDefs, queries, mutations) {
	return `${typeDefs.join('\n')}
    type Query { ${queries.join('\n')} }
    type Mutation { ${mutations.join('\n')} }`;
}

export function formatErr(error) {
	const data = formatError(error);
	const { originalError } = error;
	if (originalError && originalError.error) {
		const { path } = data;
		const { error: { id: message, code, description } } = originalError;
		return { message, code, description, path };
	}
	return data;
}
