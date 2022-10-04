const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema(
    {
        Name: {
            type: String,
            required: false,
            trim: true
        },
        LastName: {
            type: String,
            required: false,
            trim: true
        },
        IsMilitar: {
            type: Boolean,
            required: false,
            trim: true
        },
        TimeCreate: {
            type: String,
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
            type: Boolean,
            required: false,
            trim: true,
            default: false
        },
        verificationToken: {
            type: String,
            required: false,
            trim: true
        },
        
    },
    { timestamps: true },
    { versionKey: false }
);

UserSchema.pre('save', async function (next) {
    const user = this;

    try {
        if(!user.isModified('password')) {
            return next();
        }

      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(user.password, salt);

      user.password = hash;
      next();

    } catch (error) {
        return next(error);
    }
});

UserSchema.methods.comparePassword = async function (candidatePassword) {
    const user = this;
    return bcrypt.compare(candidatePassword, user.password);
};

module.exports = mongoose.model('User', UserSchema)