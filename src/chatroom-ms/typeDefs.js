export const chatroomTypeDef = `
type Chatroom {
    id: String!
    name: String!
    users: [Int!]
}

input ChatroomInput {
    id: String!
    name: String!
    users: [Int!]
}

`;

export const chatroomQueries = `
    test: Int
    getById(room_id: String!, token: String!, username: String!): Chatroom!
    getChatroomsByUser(user_id: Int!, token: String!, username: String!): [Chatroom!]
    getUsersFromChatroom(room_id: String!, token: String!, username: String!): [Int!]
`;

export const chatroomMutations = `
    createChatroom(name: String!, token: String!, username: String!) : Chatroom!
    addUser(room_id: String!, user_id: Int!, token: String!, username: String!): Chatroom!
    deleteChatroom(room_id: String!, token: String!, username: String!): Int
    removeUser(room_id: String!, user_id: Int!, token: String!, username: String!): Chatroom!
`;
