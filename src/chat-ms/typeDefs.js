export const chatsTypeDef = `
type Chat {
    id: String!
    chat_user_origin: Int!
    chat_room_id: String!
    chat_text: String!
    chat_hidden: Boolean!
    chat_date_stamp: String!

}
type ChatTest{
    message: String!
}
input ChatInput {
    chat_user_origin: Int!
    chat_room_id: String!
    chat_text: String!
}`;

export const chatsQueries = `
    testChats: ChatTest!
    chatById(chat_room_id: String!, token: String!, username: String!): [Chat!]
`;

export const chatsMutations = `
    createChat(chat: ChatInput!,  token, username): Chat!
    deleteChat(id: String!,  token, username): String
`;
