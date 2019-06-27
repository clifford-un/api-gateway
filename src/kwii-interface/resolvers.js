import { generalRequest, getRequest, getRequestProtected, generalRequestProtected } from '../utilities';
import { url, port, entryPoint } from './server';

const URL_TEST = `http://${url}:${port}`;
const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		testInterface: (_) =>
			getRequest(URL_TEST, ''),
		getTweet: (_, { email }) =>
			getRequest(`${URL}/${email}`, 'GET'),
	}

};

export default resolvers;
