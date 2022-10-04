const { ApolloServer } = require('apollo-server-express')

const resolvers = require('../graphql/resolvers')
const typeDefs = require('../graphql/typeDefs')

async function configGraphql(app){
    try {
        const apolloServer= new ApolloServer({
            typeDefs,
            resolvers,
            context: ({ req }) => {
                return req.headers.authorization;
              },
            introspection: process.env.NODE_ENV !== 'production'
        })

        await apolloServer.start()
        apolloServer.applyMiddleware({app})
        console.log('GraphQl Running')

    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

module.exports = configGraphql;