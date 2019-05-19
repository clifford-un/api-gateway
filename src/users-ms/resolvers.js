import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint_user,entryPoint_test } from './server';

const URL_USER = `http://${url}:${port}/${entryPoint_user}`;
const URL_TEST = `http://${url}:${port}/${entryPoint_test}`;

const resolvers = {
	Query: {
		allUsers: (_) =>
			getRequest(URL_USER, ''),
		allTests: (_) =>
			getRequest(URL_TEST, ''),	
		// userById: (_, { id }) =>
		// 	generalRequest(`${URL_USER}/${id}/`, 'GET'),
	},
	Mutation: {
		createTest: (_, { test }) =>
			generalRequest(`${URL_TEST}/`, 'POST', test),
		createUser: (_, { user }) =>
			generalRequest(`${URL_USER}/`, 'POST', user),
		deleteUser: (_, { id }) =>
			generalRequest(`${URL_USER}/${id}/`, 'DELETE'),
		updateUser: (_, { id, user }) =>
			generalRequest(`${URL_USER}/${id}/`, 'PUT', user)
		
	}
};

export default resolvers;
