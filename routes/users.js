
const express = require('express');
const router = express.Router();
const controller = require('../controllers/user')
const upload = require('../middleware/index')


router.post('/signup',  controller.signup)
router.post('/login', controller.login)
router.post('/upload', upload.single('file') ,controller.uploadImage)

 module.exports = router