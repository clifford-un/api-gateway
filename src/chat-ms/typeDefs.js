export const chatsTypeDef = `
type Chat {
    id: String!
    chat_user_origin: Int!
    chat_room_id: Int!
    chat_text: String!
    chat_hidden: Boolean!
    chat_date_stamp: String!

}
type ChatTest{
    message: String!
}
input ChatInput {
    chat_user_origin: Int!
    chat_room_id: Int!
    chat_text: String!
}`;

export const chatsQueries = `
    testChats: ChatTest!
    chatById(chat_room_id: Int!): [Chat!]
`;

export const chatsMutations = `
    createChat(chat: ChatInput!): Chat!
    deleteChat(id: String!): String
`;
