const { ApolloServer } = require('apollo-server-express')
const 
  {ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,}
 = require('apollo-server-core');
const  http  = require('http')

const resolvers = require('../graphql/resolvers')
const typeDefs = require('../graphql/typeDefs')



async function configGraphql(app){
    
    try {
        const httpServer = http.createServer(app)
        const apolloServer= new ApolloServer({
            typeDefs,
            resolvers,
            csrfPrevention: true,
              cache: 'bounded',
              plugins: [
                ApolloServerPluginDrainHttpServer({ httpServer }),
                ApolloServerPluginLandingPageLocalDefault({ embed: true }),
              ],
            context: ({ req }) => {
                return req.headers.authorization;
              }, 
                  
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