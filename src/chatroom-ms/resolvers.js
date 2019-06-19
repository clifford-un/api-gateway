import { generalRequest, getRequest, getRequestProtected,generalRequestProtected } from '../utilities';
import { url, port } from './server';

const URL = `http://${url}:${port}`;

const resolvers = {
	Query: {
		test: (_) =>
			getRequest(`${URL}/test/`, ''),

		getById: (_, { room_id,token,username }) =>
			getRequestProtected(`${URL}/chatroom/${room_id}/`,'GET',token,username),

		getChatroomsByUser: (_, {user_id,token,username}) =>
		getRequestProtected(`${URL}/chatrooms/${user_id}/`,'GET',token,username),

		getUsersFromChatroom: (_, {room_id,token,username}) =>
		getRequestProtected(`${URL}/users/${room_id}/`,'GET',token,username)
	},
	Mutation: {
		createChatroom: (_, {name,token,username}) =>
			generalRequestProtected(`${URL}/chatroom/`, 'POST', token,username, name),

		addUser: (_, {room_id, user_id,token,username}) =>
			generalRequestProtected(`${URL}/user/`, 'POST', token,username, {room_id, user_id}),

		deleteChatroom: (_, {room_id,token,username}) =>
			generalRequestProtected(`${URL}/chatroom/${room_id}/`, 'DELETE',token,username),

		removeUser: (_, {room_id, user_id,username}) =>
			generalRequestProtected(`${URL}/user/`, 'DELETE',token,username ,{room_id, user_id})
	}
};

export default resolvers;
