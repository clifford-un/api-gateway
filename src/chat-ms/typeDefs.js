export const chatsTypeDef = `
type Chat {
    id: String!
    chat_user_origin: Int!
    chat_room_id: Int!
    chat_text: String!
    chat_hidden: Boolean!
    chat_date_stamp: String!

}
input ChatInput {
    chat_user_origin: Int!
    chat_room_id: Int!
    chat_text: String!
}`;

export const chatsQueries = `
    allChats: [Chat]!
    chatById(id: String!): Chat!
`;

export const chatsMutations = `
    createChat(chat: ChatInput!): Chat!
    deleteChat(id: String!): String
`;
