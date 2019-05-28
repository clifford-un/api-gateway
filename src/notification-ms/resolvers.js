import { generalRequest, getRequest} from '../utilities';
import { url, port, entryPoint_notif, entryPoint_usdev } from './server';

const URL_NOTIF = `http://${url}:${port}/${entryPoint_notif}`;
const URL_USDEV = `http://${url}:${port}/${entryPoint_usdev}`;

const resolvers = {
	Query: {
		notifById: (_, { id }) =>
			generalRequest(`${URL_NOTIF}/${id}/`, 'GET'),
		userDeviceById: (_, { id }) =>
			generalRequest(`${URL_USDEV}/${id}/`, 'GET'),
	},
	Mutation: {
		sendNotif: (_, { notif }) =>
			generalRequest(URL_NOTIF, 'PUT', notif),
		setUserDevice: (_, { user }) =>
			generalRequest(URL_USDEV, 'PUT', user),
	}
};

export default resolvers;
