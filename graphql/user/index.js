const {
    getAllUser,getUserByEmail,
    createUser,updateUser,
    signToken,isAuthenticated,
    createContactoinfo, createuserDocument,
    getAllUserDocument, getAllContactInfo
  } = require('./user.service');

  const {UserInputError} = require('apollo-server-express');


  async function handlerAllUser(parent, args) {
    const {input} = args    
    return getAllUser(input);}

  async function handlerallUserDocument(parent, args) {
    const {input} = args    
    return getAllUserDocument(input);}

    async function handlerallContactInfo(parent, args) {
      const {input} = args    
      return getAllContactInfo(input);}
  
  
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
        console.log("Token",Token);
        return await createUser({...input, "verificationToken":Token});
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
    const valor = await isAuthenticated(Object.values(context).join(''))
    console.log("valor._id",valor._id);
    if ( valor === false){
      throw new UserInputError('Authorization header is empty or wrong');
    }else{
      return await updateUser( valor.id , input);
    }
  }
  
  async function handlercreatecontactInfo(parent, args, context) {
    const {input} = args
    const valor = isAuthenticated(Object.values(context).join(''))
    if ( valor === false){
      throw new UserInputError('Authorization header is empty or wrong');
    }else{
      return  await createContactoinfo(({...input, userID : valor.id })); 
    }
  }
  async function handlercreateDocument(parent, args, context) {
    const {input} = args
    const valor = isAuthenticated(Object.values(context).join(''))
    if ( valor === false){
      throw new UserInputError('Authorization header is empty or wrong');
    }else{
      return  await createuserDocument({...input, userID : valor.id }); 
    }
  }
  module.exports= {
    handlerAllUser,
    handlerallUserDocument,
    handlerallContactInfo,
    handlerUserByEmail,
    handlerCreateUser,
    handlerUpdateUser,
    handlerLoginUser,
    handlercreatecontactInfo,
    handlercreateDocument
  }

