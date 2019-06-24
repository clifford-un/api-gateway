import { generalRequest, getRequest, getRequestProtected, generalRequestProtected } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		testChats: (_) =>
			getRequest(URL, ''),
		chatById: (_, { chat_room_id, token, username }) =>
			getRequestProtected(`${URL}/${chat_room_id}/`, 'GET', token, username),
	},
	Mutation: {
		createChat: (_, { chat, token, username }) =>
			generalRequestProtected(`${URL}/`, 'POST', token, username, chat ),
		deleteChat: (_, { id,  token, username }) =>
			generalRequestProtected(`${URL}/d/${id}/`, 'DELETE', token, username)
	}
};

export default resolvers;
