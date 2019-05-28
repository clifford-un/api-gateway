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
    getById(room_id: String!): Chatroom!
    getChatroomsByUser(user_id: Int!): [Chatroom!]
    getUsersFromChatroom(room_id: String!): [Int!]
`;

export const chatroomMutations = `
    createChatroom(name: String!) : Chatroom!
    addUser(room_id: String!, user_id: Int!): Chatroom!
    deleteChatroom(room_id: String!): Int
    removeUser(room_id: String!, user_id: Int!): Chatroom!
`;