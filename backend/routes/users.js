var express = require('express');
var router = express.Router();
const User = require('../models/user');
const bcrypt=require('bcrypt')

router.post('/signUp', async(req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.json({ message: "Missing required fields",success:false})
    }
    try{
        const existingUser= await User.findOne({email:email})
    if(existingUser){
        res.json({message:"User already exist",success:false})
    }else{
        const newUser= await User({
            name,
            email,
            password:bcrypt.hashSync(password,10)
        })
        const user= await newUser.save()
        res.status(201).json({user,success:true});
    }

    }catch(err){
        console.log(err);
        res.status(500).json({message:"Internal server error"})
    }
    
})

module.exports = router;
