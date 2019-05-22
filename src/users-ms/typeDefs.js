export const usersTypeDef = `


type Protected_User {
    id: Int!
    user_name: String!
    e_mail: String!
}
type User{
    user: Protected_User!
}
type Friend {
    user_id1: Int!
    user_id2: Int!
    
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
input FriendInput {
    user_id1: Int!
    user_id2: Int!
    
}
input UserUpdateInput {
    user_name: String!
    
}`
;

export const usersQueries = `
    allUsers: [User]!
    allTests: [Test]!
    allFriends: [Friend]!
    userById(id: Int!): User!
    friendsById(id: Int!): [User]!
`;

export const usersMutations = `
    createTest(test: TestInput!): Test!
    createUser(user: UserInput!): User!
    createFriend(friend: FriendInput!): Friend!
    deleteUser(id: Int!): Int
    updateUser(id: Int!, user: UserUpdateInput!): User!
    
`;
