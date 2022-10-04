const mongoose = require('mongoose');

const UserDocumentSchema = new mongoose.Schema(
    {
        userID: {
            type: String,
            required: false,
            trim: true
        },
        Document: {
            type: String,
            required: false,
            trim: true
        },
        TypeDocument: {
            type: String,
            required: false,
            trim: true
        },
        PlaceExpedition: {
            type: String,
            required: false,
            trim: true
        },
        DateExpedition: {
            type: String,
            required: false,
            trim: true
        }, 
    },
    { timestamps: true },
    { versionKey: false }
);


  
module.exports = mongoose.model('UserDocument', UserDocumentSchema)