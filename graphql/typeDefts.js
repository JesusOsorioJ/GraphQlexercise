const { gql } = require('apollo-server-express')

const typeDefs = gql

type AppUser_TB {
    _i: ID!
    "The tittle of te book"
    Name: String!
    LastName: String!
    IsMilitar: Boolean!
    TimeCreate: String!
    username: String!
    password: String!
    email: String!
    verificationToken: String
}

type UserDocument_TB {
    _i: ID!
    "The tittle of te book"
    Document: String!
    TypeDocument: String!
    PlaceExpedition: Boolean!
    DateExpedition: String!
}

type ContactInfo_TB {
    _i: ID!
    "The tittle of te book"
    CountryId: String!
    City: String!
    CelPhone: Boolean!
    EmergencyName: String!
    EmergencyPhone: String!
}

type Query {
    _i: ID!
    "The tittle of te book"
    title: String!
    "The autor of te book"
    author: String!
}


input UserInput{
    username: String!
    password: String!
    email: String!
}

type Mutation {
    createUser(input : UserInput!): User!
    createcontactInfo(input : ContactInput!): Contact!
    createDocument(input : DocumentInput!): Document!
}




module.exports = typeDefs