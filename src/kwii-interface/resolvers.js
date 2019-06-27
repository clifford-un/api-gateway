import { generalRequest, getRequest, getRequestProtected, generalRequestProtected } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		getTweet: (_, { email }) =>
			getRequest(`${URL}/${email}`, 'GET'),
	}

};

export default resolvers;
