const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: false,
            trim: true
        },
        lastname: {
            type: String,
            required: false,
            trim: true
        },
        isMilitar: {
            type: Boolean,
            required: false,
            trim: true
        },
        isTemporal: {
            type: Boolean,
            required: false,
            trim: true
        },
        username: {
            type: String,
            required: false,
            trim: true
        },
        password: {
            type: String,
            required: false,
            trim: true
        },
        email: {
            type: String,
            required: false,
            trim: true
        },
        emailverified: {
            type: String,
            required: false,
            trim: true
        },
        emailToken: {
            type: String,
            required: false,
            trim: true
        },
        
    },
    { timestamps: true },
    { versionKey: false }
);

module.exports = mongoose.model('User', UserSchema)