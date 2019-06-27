export const interfaceTypeDef = `
type Tweet {
    content: String!
    createdAt: String!

}`;

export const interfaceQueries = `
    testInterface: String!
    getTweet(email: String!): [Tweet!]
`;
