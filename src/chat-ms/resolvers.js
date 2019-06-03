import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		testChats: (_) =>
			getRequest(URL, ''),
		chatById: (_, { chat_room_id }) =>
			generalRequest(`${URL}/${chat_room_id}/`, 'GET'),
	},
	Mutation: {
		createChat: (_, { chat }) =>
			generalRequest(`${URL}/`, 'POST', chat),
		deleteChat: (_, { id }) =>
			generalRequest(`${URL}/d/${id}/`, 'DELETE')
	}
};

export default resolvers;
