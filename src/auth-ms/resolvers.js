import { generalRequest, getRequest, generalRequest2 } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}`;
const URL_LOGIN = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		authTest: (_) =>
			getRequest(URL, ''),
		login: (_, { id, token }) =>
			generalRequest2(`${URL_LOGIN}/${id}/`, 'GET',_,token),
	},
	Mutation: {
		createToken: (_, { user }) =>
			generalRequest(URL_LOGIN, 'POST', user),
	}
};

export default resolvers;
