import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	chatsMutations,
	chatsQueries,
	chatsTypeDef
} from './chat-ms/typeDefs';

import chatsResolvers from './chat-ms/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		chatsTypeDef
	],
	[
		chatsQueries
	],
	[
		chatsMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		chatsResolvers
	)
});
