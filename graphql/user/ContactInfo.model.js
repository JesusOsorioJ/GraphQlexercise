const mongoose = require('mongoose');

const ContactInfoSchema = new mongoose.Schema(
    {
        userID: {
            type: String,
            required: false,
            trim: true
        },
        CountryId: {
            type: String,
            required: false,
            trim: true
        },
        City: {
            type: String,
            required: false,
            trim: true
        },
        CelPhone: {
            type: Number,
            required: false,
            trim: true
        },
        EmergencyName: {
            type: String,
            required: false,
            trim: true
        }, 
        EmergencyPhone: {
            type: Number,
            required: false,
            trim: true
        },
    },
    { timestamps: true },
    { versionKey: false }
);


module.exports = mongoose.model('ContactInfo', ContactInfoSchema)