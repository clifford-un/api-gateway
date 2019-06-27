export const interfaceTypeDef = `
type Tweet {
    content: String!
    createdAt: String!

}`;

export const interfaceQueries = `
    getTweet(email: String!): [Tweet!]
`;
