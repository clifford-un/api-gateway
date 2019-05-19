export const usersTypeDef = `
type User {
    id: Int!
    user_name: String!
    password: String!
    e_mail: String!
    phone_number: Int!
    last_connection: String!
    temp: Boolean! 
    
}
type Test {
    id: Int!
    test: String!  
}
input TestInput {
    test: String!
}
input UserInput {
    user_name: String!
    password: String!
    e_mail: String!
    phone_number: Int!
    last_connection: String!
    temp: Boolean! 
    
}
input UserUpdateInput {
    user_name: String!
    
}`
;

export const usersQueries = `
    allUsers: [User]!
    allTests: [Test]!
    
`;

export const usersMutations = `
    createTest(test: TestInput!): Test!
    createUser(user: UserInput!): User!
    deleteUser(id: Int!): Int
    updateUser(id: Int!, user: UserUpdateInput!): User!
    
`;
