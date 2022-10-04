const jsonwebtoken = require('jsonwebtoken');
const userModel = require ('./user.model')
const ContactInfoModel = require ('./ContactInfo.model')
const userDocumentModel = require ('./userDocument.model')


async function getAllUser(body) {
  return await userModel.find(body);
}
async function getAllUserDocument(body) {
  return await userDocumentModel.find(body);
}
async function getAllContactInfo(body) {
  return await ContactInfoModel.find(body);
}

async function getUserByEmail(email){
  return await userModel.findOne({ email });
}

async function createUser(body) {
  return await userModel.create(body);
}

async function createContactoinfo(body) {
    return await ContactInfoModel.create(body);
  }

  
async function createuserDocument(body) {
    return await userDocumentModel.create(body);
}

async function updateUser(id, body) {
  const updatedUser = await userModel.findByIdAndUpdate(id, body, {
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
            if (TokenExist){
            const payload = await validateToken(authHeader);
            if (!payload){
                return false
            }else{
                return TokenExist
                // return payload
            }}else{
              return false}

        }
    }

module.exports = {
  getAllUser, getUserByEmail,
  getAllUserDocument, getAllContactInfo,
  createUser, createContactoinfo,
  createuserDocument, updateUser,
  signToken, isAuthenticated,
}