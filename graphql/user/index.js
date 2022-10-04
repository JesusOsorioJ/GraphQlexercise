const {
    getAllUser,
    getUserByEmail,
    createUser,
    updateUser
  } = require('./user.service');
  
  const {
    UserInputError
  } = require('apollo-server-express');


  async function handlerAllUser(req, res) {
    return getAllUser();
  }
  
  async function handlerUserByEmail(parent, args) {
    const {input} = args    
    try {
      const client = await getUserByEmail(req.user.email);
      return res.status(200).json(client);
    } catch (error) {
      return res.status(404).json({ message: 'Information not found' });
    }
  }

  async function handlerCreateUser(parent, args) {
    const {input} = args    
    const useremail = await getUserByEmail(input.email)
    if (useremail === null){
        return await createUser(input);
    }else{
    throw new UserInputError('This email has been created');
    }
    
    
      
    
       
    
  }
  
  async function handlerUpdateUser(req, res) {
    const { id } = req.params;
    const update = req.body;
    try {
      const client = await updateUser(id, update);
      return res.status(200).json(client);
    } catch (error) {
      return res.status(404).json({ message: `Client not found with id: ${id}` });
    }
  }
  
  module.exports= {
    handlerAllUser,
    handlerUserByEmail,
    handlerCreateUser,
    handlerUpdateUser,
  }