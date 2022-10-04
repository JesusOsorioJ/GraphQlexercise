const userController = require ('./user')

const resolvers = {

    Query: {
        allUser: userController.handlerAllUser,
        UserDocumentByUser: userController.handlerallUserDocument,
        ContactInfoByUser: userController.handlerallContactInfo,
        allUserDocument: userController.handlerallUserDocument,
        allContactInfo: userController.handlerallContactInfo,
    },

    Mutation: {
        createUser: userController.handlerCreateUser,
        LoginUser: userController.handlerLoginUser,
        UpdateUser: userController.handlerUpdateUser,
        createcontactInfo: userController.handlercreatecontactInfo,
        createDocument: userController.handlercreateDocument
    }
}

module.exports = resolvers
