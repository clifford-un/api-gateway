export const usersTypeDef = `


type Protected_User {
    id: Int!
    user_name: String!
    e_mail: String!
    friends: [[Protected_User!]]
    request_number: Int!
    Friend_requests: [[[Protected_User]]]!
}
type User{
    user: Protected_User!
}
type Friend {
    user_id1: Int!
    user_id2: Int!  
}
type Request {
    user_id_to: Int!
    user_id_from: Int!  
}
type Test {
    id: Int!
    test: String!  
}
type Requests{
    to: [Protected_User]
    from: [Protected_User]
}
input RequestInput {
    user_id_to: Int!
    user_id_from: Int! 
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
    requestsById(id: Int!): [[[Protected_User]]]
`;

export const usersMutations = `
    createTest(test: TestInput!): Test!
    createUser(user: UserInput!): User!
    createFriend(friend: FriendInput!): Friend!
    deleteUser(id: Int!): Int
    createFriendRequest(request: RequestInput!): Request!
    updateUser(id: Int!, user: UserUpdateInput!): User!
    accept(id: Int!): Int
    deny(id: Int!): Int
`;
