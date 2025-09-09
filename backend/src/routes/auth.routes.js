const {registerController , loginController , userController , logoutController} =  require('../controllers/auth.controllers')



const express = require('express');
const router = express.Router();


router.post('/register',registerController)

router.post('/login',loginController)

router.get('/user',userController)

router.get('/logout',logoutController)


module.exports = router