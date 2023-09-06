const db = require('../models/index')
const {sequelize} = require('../config/db');
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const multer = require('multer');
const path = require('path');
const fs = require('fs');

exports.signup = async function (request, response, next) {

   
    try {
        const {  username , phoneNumber , gender , password } = request.body;
        // Find a user with the given phoneNumber
        const userExist = await db.User.findOne({ where: { phoneNumber } });
    
        if (userExist) {
            return response.status(409).json({ message: 'phoneNumber already exists' });
        } 
        const User = await db.User.create({ username , phoneNumber , gender ,password : bcrypt.hashSync (password,8)  });
        const token = jwt.sign({ id: User.id  , phoneNumber:User.phoneNumber},"AGEL-1234$-DEVELOPMENT-FINTECH",{expiresIn: "90d", })
        response.status(201).json({ data :User , token , message: 'User registered successfully' });
        
      } catch (error) {
        console.error('Error searching for user:', error);
      }  
}
exports.login = async function (request, response, next) {

     
  try {
    const { phoneNumber, password  , token} = request.body;
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
      var decoded = jwt.verify(token, "AGEL-1234$-DEVELOPMENT-FINTECH");

       response.status(200).json({ phoneNumber :user.phoneNumber ,token ,message: 'User login successfully' });
        
        
      } catch (error) {
        console.error('Error searching for user:', error);
      }

    
}
exports.uploadImage = async function (request, response, next) {
 
  if (!request.file) {
    return response.status(400).send('No file uploaded.');
  }
  // const fileName = req.file.originalname;
  // const fileExtension = path.extname(fileName);
  // if (fileExtension !== '.png' && fileExtension !== '.pdf') {
  //   // Delete the uploaded file if it has an unsupported extension
  //   fs.unlinkSync(filePath);
  //   return res.status(400).send('Only PNG images and PDF documents are allowed.');
  // }
  // Send a success response
  response.status(200).send('File uploaded successfully.');
    
}