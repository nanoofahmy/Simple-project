
const express = require('express');
const app = express()
const router = express.Router();
const controller = require('../controllers/user')
const { authJwt } = require("../middleware");






router.post('/signup',  controller.signup)
router.post('/login', controller.login)


 module.exports = router