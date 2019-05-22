import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint_user,entryPoint_test,entryPoint_friend } from './server';

const URL_USER = `http://${url}:${port}/${entryPoint_user}`;
const URL_TEST = `http://${url}:${port}/${entryPoint_test}`;
const URL_FRIEND = `http://${url}:${port}/${entryPoint_friend}`;
const URL_GET_FRIENDS = `http://${url}:${port}/see_friends/?`;

const resolvers = {
	Query: {
		allUsers: (_) =>
			getRequest(URL_USER, ''),
		allTests: (_) =>
			getRequest(URL_TEST, ''),	
		allFriends: (_) =>
			getRequest(URL_FRIEND, ''),
		userById: (_, { id }) =>
			 generalRequest(`${URL_USER}/${id}/`, 'GET'),
		friendsById: (_, { id }) =>
			 generalRequest(`${URL_GET_FRIENDS}id=${id}`, 'GET'),
	},
	Mutation: {
		createTest: (_, { test }) =>
			generalRequest(`${URL_TEST}/`, 'POST', test),
		createUser: (_, { user }) =>
			generalRequest(`${URL_USER}/`, 'POST', user),
		createFriend: (_, { friend }) =>
			generalRequest(`${URL_FRIEND}/`, 'POST', friend),
		deleteUser: (_, { id }) =>
			generalRequest(`${URL_USER}/${id}/`, 'DELETE'),
		updateUser: (_, { id, user }) =>
			generalRequest(`${URL_USER}/${id}/`, 'PUT', user)
		
	}
};

export default resolvers;
