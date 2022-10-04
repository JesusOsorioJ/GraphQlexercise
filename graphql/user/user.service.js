const jsonwebtoken = require('jsonwebtoken');
const userModel = require ('./user.model')
const userModel = require ('./user.model')
const userModel = require ('./user.model')


async function getAllUser() {
  return await userModel.find();
}

async function getUserByEmail(email){
  return await userModel.findOne({ email });
}

async function createUser(body) {
  return await userModel.create(body);
}

async function updateUser(id, body) {
  const updatedClient = await userModel.findByIdAndUpdate(id, body, {
    new: true
  })
  return updatedUser;
}

function signToken(payload) {
    const token = jsonwebtoken.sign(payload, 'secret_token', {
      expiresIn: '2h',
    });
  
    return token;
}

async function validateToken(token) {
    try {
      const payload = await jsonwebtoken.verify(token, 'secret_token');
      return payload;
    } catch (error) {
      return {error: true, ...error};
    }
  }

async function isAuthenticated(authHeader) {
        if (!authHeader) {
          return false
        }else{
            const TokenExist = await userModel.findOne({ "verificationToken" : authHeader });
            if (!TokenExist){
            const payload = await validateToken(authHeader);
            if (!payload){
                return false
            }else{
                return TokenExist
                // return payload
            }}

        }
    }

module.exports = {
  getAllUser,
  getUserByEmail,
  createUser,
  updateUser,
  signToken,
  isAuthenticated,
}