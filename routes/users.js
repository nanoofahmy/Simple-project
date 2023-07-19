
const express = require('express');
const app = express()
const router = express.Router();
const controller = require('../controllers/user')
const multer = require("multer");
const path = require('path');
const fs = require('fs');

const upload = multer({ dest: 'uploads/' });




router.post('/signup',  controller.signup)
router.post('/login', controller.login)
router.post('/upload', upload.single('file') ,controller.uploadImage)

 module.exports = router