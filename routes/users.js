
const express = require('express');
const app = express()
const router = express.Router();
const controller = require('../controllers/user')
const { authJwt } = require("../middleware");






router.post('/signup',  controller.signup)
router.post('/login', authJwt.verifyToken(), controller.login)


 module.exports = router