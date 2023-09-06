const db = require('../models/index')
const {sequelize} = require('../config/db');
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
require('dotenv').config('../config/config.env');
exports.signup = async function (request, response, next) {

   
    try {
        const {  username , phoneNumber , gender , password } = request.body;
        // Find a user with the given phoneNumber
        const userExist = await db.User.findOne({ where: { phoneNumber } });
    
        if (userExist) {
            return response.status(409).json({ message: 'phoneNumber already exists' });
        } 
     const User = await db.User.create({ username , phoneNumber , gender ,password : bcrypt.hashSync (password,8)  });
      // 2- Generate token
      console.log(process.env.JWT_SECRET_KEY);
  const token = jwt.sign({ id: User.id  , phoneNumber:User.phoneNumber} ,"AGEL-SECRET-1234$-DEVELOPMENT", {expiresIn :"90d"});
      response.status(201).json({ data: User, token  , message: 'User registered successfully' });
        
      } catch (error) {
        console.error('Error searching for user:', error);
      }

    
}
exports.login = async function (request, response, next) {

     
  try {
    const { phoneNumber, password } = request.body;
    data = {}
    var token = request.body.token
    // Find the user with the given username and password
    const user = await db.User.findOne({ where: { phoneNumber} });
    if (!user) {
        return response.status(401).json({ message: 'Invalid phonenumber' });
      }
    var passwordIsValid = bcrypt.compareSync(
        request.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return response.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }
      var decoded = jwt.verify(token , "AGEL-SECRET-1234$-DEVELOPMENT");
     console.log(decoded)
     
      response.status(201).json({   phoneNumber:user.phoneNumber, token , message: 'User login successfully' });
    // const token = jwt.sign({ id: user.id  , phoneNumber:user.phoneNumber},
    //     config.secret,
    //     {
    //       algorithm: 'HS256',
    //       allowInsecureKeySizes: true,
    //       expiresIn: 86400, // 24 hours
    //     });
        
      } catch (error) {
        console.error('Error searching for user:', error);
      }

    
}