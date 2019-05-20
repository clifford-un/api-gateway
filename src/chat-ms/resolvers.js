import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allChats: (_) =>
			getRequest(URL, ''),
		chatById: (_, { id }) =>
			generalRequest(`${URL}/${id}/`, 'GET'),
	},
	Mutation: {
		createChat: (_, { chat }) =>
			generalRequest(`${URL}/`, 'POST', chat),
		deleteChat: (_, { id }) =>
			generalRequest(`${URL}/${id}/`, 'DELETE')
	}
};

export default resolvers;
