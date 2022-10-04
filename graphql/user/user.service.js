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

module.exports = {
  getAllUser,
  getUserByEmail,
  createUser,
  updateUser,
}