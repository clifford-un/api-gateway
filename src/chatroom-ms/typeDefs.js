export const notifTypeDef = `
type Chatroom {
    id: String!
    name: String!
    users: [Int!]
}
`;

export const notifQueries = `
    test(): Int
    getById(room_id: String!): Chatroom!
    getChatroomsByUser(user_id: Int!): [Chatroom!]
    getUsersFromChatroom(room_id: String!): [Int!]
`;

export const notifMutations = `
    createChatroom(room: Chatroom!) : Chatroom!
    addUser(room_id: String!, user_id: Int!): Chatroom!
    deleteChatroom(room_id: String!): Int
    removeUser(room_id: String!, user_id: Int!): Chatroom!
`;
