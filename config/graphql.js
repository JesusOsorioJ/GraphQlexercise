const { ApolloServer } = require("apollo-server-express")

const resolvers = require('../graphql/resolvers')
const typeDefts = require('../graphql/typeDefts')

async function configGraphql(app){
    try {
        const ApolloServer= new ApolloServer({
            typeDefts,
            resolvers,
        })

        await ApolloServer.start()
        ApolloServer.applyMiddleeware({app})
        console.log('GraphQl Running')

    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

module.exports = configGraphql;