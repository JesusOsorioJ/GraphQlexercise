const userController = require ('./user')

const resolvers = {

    Query: {
        allUser: userController.handlerAllUser,
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
