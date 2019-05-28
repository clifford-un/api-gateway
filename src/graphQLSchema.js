import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	chatsMutations,
	chatsQueries,
	chatsTypeDef,
} from './chat-ms/typeDefs';

import {
	usersMutations,
	usersQueries,
	usersTypeDef,
} from './users-ms/typeDefs';

import {
	notifQueries,
	notifMutations,
	notifTypeDef,
} from './notification-ms/typeDefs';

import {
	chatroomQueries,
	chatroomMutations,
	chatroomTypeDef
} from './chatroom-ms/typeDefs';

import chatsResolvers from './chat-ms/resolvers';
import usersResolvers from './users-ms/resolvers';
import notifResolvers from './notification-ms/resolvers';
import chatroomResolvers from './chatroom-ms/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		chatsTypeDef,
		usersTypeDef,
		notifTypeDef
	],
	[
		chatsQueries,
		usersQueries,
		notifQueries
	],
	[
		chatsMutations,
		usersMutations,
		notifMutations
	],
	[
		chatroomQueries,
		chatroomMutations,
		chatroomTypeDef
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		chatsResolvers,
		usersResolvers,
		notifResolvers,
		chatroomResolvers
	)
});
