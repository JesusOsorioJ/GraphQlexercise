const { gql, GraphqlErrorBuilder } = require('apollo-server-express')

const typeDefs = gql`

    type AppUser_TB {
        _id: ID!
        "The tittle of te book"
        Name: String
        LastName: String
        IsMilitar: Boolean
        TimeCreate: String
        username: String
        password: String
        email: String
        verificationToken: String
    }

    type UserDocument_TB {
        _id: ID!
        userID: String!
        "The tittle of te book"
        Document: String!
        TypeDocument: String!
        PlaceExpedition: String
        DateExpedition: String
    }

    type ContactInfo_TB {
        _id: ID!
        userID: String
        "The tittle of te book"
        CountryId: String!
        City: String!
        CelPhone: Boolean!
        EmergencyName: String!
        EmergencyPhone: String!
    }

    type Query {
        allUser: [AppUser_TB]
    }

    type Mutation {
        createUser(input : UserInput!): AppUser_TB!
        LoginUser(input : UserInput!): AppUser_TB!
        UpdateUser(input : UserUpdate!): AppUser_TB!
        createcontactInfo(input : ContactInput!): ContactInfo_TB!
        createDocument(input : DocumentInput!): UserDocument_TB!
        
    }

    input UserInput{
        email: String!
        password: String!   
    }

    input UserUpdate {
        
        "The tittle of te book"
        Name: String
        LastName: String
        IsMilitar: Boolean
        username: String
        verificationToken: String
    }

    input DocumentInput {
        _i: ID!
        "The tittle of te book"
        Document: String!
        TypeDocument: String!
        PlaceExpedition: Boolean!
        DateExpedition: String!
    }

    input ContactInput {
        _i: ID!
        "The tittle of te book"
        CountryId: String!
        City: String!
        CelPhone: Boolean!
        EmergencyName: String!
        EmergencyPhone: String!
    }




`


module.exports = typeDefs;