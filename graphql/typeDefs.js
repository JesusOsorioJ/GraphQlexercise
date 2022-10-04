const { gql, GraphqlErrorBuilder } = require('apollo-server-express')

const typeDefs = gql`



    type AppUser_TB {
        _id: ID
        Name: String
        LastName: String
        IsMilitar: Boolean
        TimeCreate: String
        username: String
        password: String
        email: String
        emailverified: Boolean
        verificationToken: String
    }
    
    type UserDocument_TB {
        _id: ID
        userID: String
        Document: Float
        TypeDocument: String
        PlaceExpedition: String
        DateExpedition: String
    }

    
    type ContactInfo_TB {
        _id: ID
        userID: String
        CountryId: String
        City: String
        CelPhone: Float
        EmergencyName: String
        EmergencyPhone: Float
    }

    type Query {
        allUser(Name: String, LastName: String, IsMilitar: Boolean, email: String ):[AppUser_TB]
        UserDocumentByUser(userID: String!):[UserDocument_TB]
        ContactInfoByUser(userID: String!):[ContactInfo_TB]
        allUserDocument(userID: String, TypeDocument: String, PlaceExpedition: String):[UserDocument_TB]
        allContactInfo(userID: String, CountryId: String, City: String ):[ContactInfo_TB]
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
        Name: String!
        LastName: String!
        IsMilitar: Boolean
        username: String
    }

    input DocumentInput {
        Document: Float!
        TypeDocument: String!
        PlaceExpedition: String
        DateExpedition: String
    }

    input ContactInput {

        CountryId: String!
        City: String!
        CelPhone: Float!
        EmergencyName: String
        EmergencyPhone: Float
    }

`
module.exports = typeDefs;