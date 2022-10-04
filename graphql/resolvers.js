const userController = require ('./user')

const resolvers = {

    Query: {
        allUser: userController.handlerAllUser,
    },

    Mutation: {
        createUser: userController.handlerCreateUser,
    }
}

module.exports = resolvers
