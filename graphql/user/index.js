const {
    getAllUser,getUserByEmail,
    createUser,updateUser,
    signToken,isAuthenticated,
    createContactoinfo, createuserDocument
  } = require('./user.service');

  const {UserInputError} = require('apollo-server-express');


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
        const Token = signToken(input)
        return await createUser({...input, verificationToken:Token});
    }else{
    throw new UserInputError('This email has been created');
    } 
  }

  async function handlerLoginUser(parent, args) {
    const {input} = args
    const useremail = await getUserByEmail(input.email)
    const isMatch = await useremail.comparePassword(input.password);
    if (!isMatch){
        throw new UserInputError('This email or password dont work');
    }else{
        const Token = signToken(input)
        return await updateUser(useremail.id, {...input, verificationToken:Token});
    } 
  }
  
  async function handlerUpdateUser(parent, args, context) {
    const {input} = args
    const valor = isAuthenticated(Object.values(context).join(''))
    if ( valor === false){
      throw new UserInputError('Authorization eader is empty or wrong');
    }else{
      const client = await updateUser( valor._id , args);
    }
  }
  
  async function handlercreatecontactInfo(parent, args, context) {
    const {input} = args
    const valor = isAuthenticated(Object.values(context).join(''))
    if ( valor === false){
      throw new UserInputError('Authorization eader is empty or wrong');
    }else{
       const client = await createContactoinfo(({...input, userID : valor._id }));
        return res.status(200).json(client);
    }
  }
  async function handlercreateDocument(parent, args, context) {
    const {input} = args
    const valor = isAuthenticated(Object.values(context).join(''))
    if ( valor === false){
      throw new UserInputError('Authorization eader is empty or wrong');
    }else{
      const createuserDo = await createuserDocument({...input, userID : valor._id });
      return createuserDo
    }
  }
  module.exports= {
    handlerAllUser,
    handlerUserByEmail,
    handlerCreateUser,
    handlerUpdateUser,
    handlerLoginUser,
    handlercreatecontactInfo,
    handlercreateDocument
  }