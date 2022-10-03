const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        lastname: {
            type: String,
            required: true,
            trim: true
        },
        isMilitar: {
            type: Boolean,
            required: true,
            trim: true
        },
        isTemporal: {
            type: Boolean,
            required: true,
            trim: true
        },
        username: {
            type: String,
            required: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true
        },
        emailverified: {
            type: String,
            required: true,
            trim: true
        },
        emailToken: {
            type: String,
            required: true,
            trim: true
        },
        
    },
    { timestamps: true },
    { versionKey: false }
);