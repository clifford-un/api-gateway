import { generalRequest, getRequest } from '../utilities';
import { url, port } from './server';

const URL = `http://${url}:${port}`;

const resolvers = {
	Query: {
		test: (_) =>
			getRequest(`${URL}/test/`, ''),

		getById: (_, { room_id }) =>
			getRequest(`${URL}/chatroom/${room_id}/`),

		getChatroomsByUser: (_, {user_id}) =>
			getRequest(`${URL}/chatrooms/${user_id}/`),

		getUsersFromChatroom: (_, {room_id}) =>
			getRequest(`${URL}/users/${room_id}/`)
	},
	Mutation: {
		createChatroom: (_, {name}) =>
			generalRequest(`${URL}/chatroom/`, 'POST', name),

		addUser: (_, {room_id, user_id}) =>
			generalRequest(`${URL}/user/`, 'POST', {room_id, user_id}),

		deleteChatroom: (_, {room_id}) =>
			generalRequest(`${URL}/chatroom/${room_id}/`, 'DELETE'),

		removeUser: (_, {room_id, user_id}) =>
			generalRequest(`${URL}/user/`, 'DELETE', {room_id, user_id})
	}
};

export default resolvers;
