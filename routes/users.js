
const express = require('express');
const router = express.Router();
const controller = require('../controllers/user')
const { verifySignUp } = require("../middleware");


//   app.use(function(req, res, next) {
//     res.header(
//       "Access-Control-Allow-Headers",
//       "x-access-token, Origin, Content-Type, Accept"
//     );
//     next();
//   });



router.post('/signup',  controller.signup)
router.post('/login', verifySignUp., controller.login)


 module.exports = router