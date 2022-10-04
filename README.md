## GraphQlexercise: _Texto explicativo de página_
https://graphqlexercise.herokuapp.com/graphql
La página tiene una base de datos en MongoDb con tres colecciones
- **AppUser_TB:**  contiene la información el usuario
- **UserDocument_TB:** contiene la información de documento de identidad del usuario
- **ContactInfo_TB:** contiene la información de Contacto del usuario

La página dispone de los siguientes query:
1. **allUser:** búsqueda total de usuarios o por Name, LastName, IsMilitar
2. **UserDocumentByUser:** búsqueda obligatoria por userID ("Id del usuario que lo registro")
3. **ContactInfoByUser:** búsqueda obligatoria por userID
4. **allUserDocument:** documento de identidad o por userID, TypeDocument, PlaceExpedition
5. **allContactInfo:** búsqueda total de Contactos o por userID, CountryId, City

Las siguientes mutaciones 
1. **createUser:** crea un usuario, devuelve token de verificación (verificationToken)
2. **LoginUser:** logea un usuario, devuelve token de verificación
3. **UpdateUser:** Modifica datos de usuario (autenticación necesaria)
4. **createcontactInfo:** Crea un contacto de usuario con userID (autenticación necesaria)
5. **createDocument:** Crea un documento de identidad con userID (autenticación necesaria)

**Nota1.** Para autenticación se hace necesario agregar **verificationToken** (devuelto en createUser o LoginUser) en Header Authorization sin añadir nada al token.

**Nota2.** Las contraseñas son encriptadas y comparadas con libreria **bcrypt** y los tókenes son generados y comparados con **jsonwebtoken**