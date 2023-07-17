// Middleware to authenticate the token
// function authenticateToken(request, response, next) {
//     const authHeader = request.headers['authorization'];
//     const token = authHeader && authHeader.split(' ')[1];
//     if (token == null) {
//       return response.status(401).json({ message: 'Missing token' });
//     }
//     jwt.verify(token, 'yourSecretKey', (err, decodedToken) => {
//       if (err) {
//         return response.status(403).json({ message: 'Invalid token' });
//       }
//       request.userId = decodedToken.userId;
//       next();
//     });
//   }
const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.User;

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  jwt.verify(token,
            config.secret,
            (err, decoded) => {
              if (err) {
                return res.status(401).send({
                  message: "Unauthorized!",
                });
              }
              req.userId = decoded.id;
              next();
            });
};
const authJwt = {
    verifyToken: verifyToken,

  };
  module.exports = authJwt;