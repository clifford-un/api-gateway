export const authTypeDef = `
type Token {
    jwt: String,
    user_id: String,
    user_name: String,
    error: String
}
type AuthTest {
    message: String!
}
type TokenOutput {
    message: String
    error: String
}
input AuthInput {
    userName: String!
    password: String!
}
`;

export const authQueries = `
    authTest: AuthTest!
    login(token: String!, id: String!): TokenOutput
`;

export const authMutations = `
    createToken(user: AuthInput!): Token!
`;
