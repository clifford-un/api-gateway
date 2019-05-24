export const notifTypeDef = `
type Notif {
    id: String!
    message: String!
    topic: String!
    device: String
    user: String!
}
type UserDevice {
    user: String!
    device: String!
}

input UserDeviceInput {
    user: String!
    device: String!
}

input NotifInput{
    message: String!
    topic: String!
    device: String
    user: String!
}
`;

export const notifQueries = `
    notifById(id: String!): Notif!
    userDeviceById(id: String!): UserDevice!
`;

export const notifMutations = `
    sendNotif(notif: NotifInput!): Notif!
    setUserDevice(user: UserDeviceInput!): UserDevice!
`;
