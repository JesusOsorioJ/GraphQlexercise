const { ApolloServer } = require('apollo-server-express')
const {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
} = ('apollo-server-core');

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
              csrfPrevention: true,
              cache: 'bounded',
              plugins: [
                ApolloServerPluginDrainHttpServer({ httpServer }),
                ApolloServerPluginLandingPageLocalDefault({ embed: true }),
              ],
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