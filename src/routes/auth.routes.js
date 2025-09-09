const express = require('express');
const userModel = require('../models/user.model');
const jwt = require("jsonwebtoken")
const router = express.Router();


router.post('/register', async(req, res) => {
    const {username, password} = req.body;


    const existingUser = await userModel.findOne({
        username
    })

    if(existingUser){
        return res.status(409).json({
            message:"Username Already Exist"
        })
    }


    const user = await userModel.create({
        username , 
        password
    })

    const token = jwt.sign({
        id:user._id
    },process.env.JWT_SECRET)

    res.cookie('token',token)

    res.status(201).json({
        message:"User Created Successfully",
        user
    })
})

router.post('/login',async(req,res)=>{

    const {username , password} = req.body;

    const user = await userModel.findOne({
        username : username
    })

    if(!user){
        return res.status(404).json({
            message:"User Not Found"
        })
    }

    const isPasswordValid = password === user.password

    if(!isPasswordValid){
        return res.status(401).json({
            message:"Invalid Password"
        })
    }

    const token = jwt.sign({id:user._id},process.env.JWT_SECRET)

    res.cookie("token",token,{
        expires:new Date(Date.now() + 1000*60*60*24*7),
    })

    res.status(200).json({
        message:"User Login Successfully",
        user
    })
})

router.get('/user',async(req,res)=>{
    const {token} = req.cookies;

    if(!token){
        return res.status(401).json({
            message:"Unauthorised"
        })
    }

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)

        const user = await userModel.findOne({
            _id:decoded.id
        }).select("-password")

        res.status(200).json({
            message:"User Data Fetched Successfully",
            user
        })
    }
    catch(err){
        return res.status(401).json({
            message:"Unauthorised - Inavalid Token"
        })
    }
})

router.get('/logout',(req,res)=>{
    res.clearCookie("token")
    res.status(200).json({
        message:"User Logged Out Successfully"
    })
})


module.exports = router