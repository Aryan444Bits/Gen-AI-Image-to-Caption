const express = require('express')
const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware')
const {createPostController} = require('../controllers/post.controller')
const multer = require('multer')

const upload = multer({ storage: multer.memoryStorage() })

router.post('/', // api pe request aai
    authMiddleware, // check the user verified or not then req.user = user and controller pe send kr dega data

    upload.single("image"),
    createPostController
)


module.exports = router