const userController = require ('./pet')

const resolves = {
    
    Query: {
        allUser: usersController.allUsersHandler,
    },

    Mutation: {
        createUser: userController.createUSerHandler,
    }
}

module.exports = resolvers
