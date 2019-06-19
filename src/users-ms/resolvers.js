import { generalRequest, getRequest, getRequestProtected } from '../utilities';
import { url, port, entryPoint_user,entryPoint_test,entryPoint_friend } from './server';

const URL_USER = `http://${url}:${port}/${entryPoint_user}`;
const URL_TEST = `http://${url}:${port}/${entryPoint_test}`;
const URL_FRIEND = `http://${url}:${port}/${entryPoint_friend}`;
const URL_GET_FRIENDS = `http://${url}:${port}/see_friends/?`;
const URL_GET_REQUESTS = `http://${url}:${port}/see_requests/?`;
const URL_ACCEPT = `http://${url}:${port}/accept/?`;
const URL_DENY = `http://${url}:${port}/deny/?`;
const URL_FRIEND_REQUEST = `http://${url}:${port}/friend_requests`;


const resolvers = {
	Query: {
		allUsers: (_) =>
			getRequest(URL_USER, ''),
		allTests: (_) =>
			getRequest(URL_TEST, ''),	
		allFriends: (_) =>
			getRequest(URL_FRIEND, ''),
		userById: (_, { id, token, username }) =>
			getRequestProtected(`${URL_USER}/${id}/`, '', token, username),
		friendsById: (_, { id }) =>
			 generalRequest(`${URL_GET_FRIENDS}id=${id}`, 'GET'),
		requestsById: (_, { id }) =>
			 generalRequest(`${URL_GET_REQUESTS}id=${id}`, 'GET'),
	},
	Mutation: {
		accept: (_, { id }) =>
			generalRequest(`${URL_ACCEPT}id=${id}`, 'GET'),
		deny: (_, { id }) =>
			generalRequest(`${URL_DENY}id=${id}`, 'GET'),
		createTest: (_, { test }) =>
			generalRequest(`${URL_TEST}/`, 'POST', test),
		createUser: (_, { user }) =>
			generalRequest(`${URL_USER}/`, 'POST', user),
		createFriend: (_, { friend }) =>
			generalRequest(`${URL_FRIEND}/`, 'POST', friend),
		deleteUser: (_, { id }) =>
			generalRequest(`${URL_USER}/${id}/`, 'DELETE'),
		updateUser: (_, { id, user }) =>
			generalRequest(`${URL_USER}/${id}/`, 'PUT', user),
		createFriendRequest: (_, { request }) =>
			generalRequest(`${URL_FRIEND_REQUEST}/`, 'POST', request),
	}
};

export default resolvers;
