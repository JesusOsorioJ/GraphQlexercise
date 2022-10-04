const user = require ('/user.model')

async function getAllClients() {
    return await ClientModel.find();
  }

  
  module.exports = {
    getAllClients,
    getClientById,
    getClientByEmail,
    createClient,
    updateClient,
  }