export const interfaceTypeDef = `
type Tweet {
    content: String!
    createdAt: String!

}
type name: String!

type Tweets {
  name: Tweet!
}
`;

export const interfaceQueries = `
    testInterface: String!
    getTweet(email: String!): [Tweets!]
`;
