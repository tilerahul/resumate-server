const User = require("../models/userModel");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const home = (req, res) =>{
    try {
        res.status(200).send("<h1>This is the Resumate Home page</h1>");
    } catch (error) {
        res.status(404).json({msg:"Page not found"});
    }
}
const login = async (req, res) =>{
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                success : false,
                message : 'Please fill all fields',
            })
        }

        const userExist = await User.findOne({email});
        if(!userExist){
            return res.status(404).json({
                success : false,
                message : 'User not found, please register first',
            })
        }
        const isVerify = await bcrypt.compare(password, userExist.password);
        if(!isVerify){
            return res.status(404).json({
                success : false,
                message : 'Invalid Credentials',
            })
        }
        const token = jwt.sign({
            userId : userExist._id,
            isAdmin : userExist.isAdmin,
        },
        process.env.JWT_SECRET_KEY, {
            expiresIn : '1h'
        })
        req.user = token;
        return res.cookie('token', token, {
            expire: new Date(new Date().getTime()+10*1000,{
                httpOnly : true
            })
        }).status(200).json({
            success : true,
            message : 'Login Successful',
            user : userExist,
            token 
        })

    } catch (error) {
        res.status(404).json({message:"Page not found"});
    }
}

const register = async (req, res) =>{
    try {
        const {firstName, lastName, email, phone, password, cpassword} = req.body;

        if(!firstName || !lastName || !email || !phone || !password || !cpassword){
            return res.status(400).json({
                success : false,
                message : 'All Fields are mandatory',
            })
        }
        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({
                success : false,
                message : 'Email already exist',
            })
        }
        if(password !== cpassword){
            return res.status(400).json({
                success : false,
                message : 'password does not match',
            })
        }
        // const hashPassword = await bcrypt.hash(password, 10);
        // const imgUrl = `https://ui-avatars.com/api/?name=${firstName}+${lastName}`
        // const userCreated = await User.create({firstName, lastName, email, phone, password:hashPassword, imgUrl});

        return res.status(200).json({
            success : true,
            message : 'All Fields are correct !!',
        })
    } catch (error) {
        res.status(404).json({message:"Page not found"});
    }
}

const getAllUser = async (req, res) =>{
    try {
        const users = await User.find();
        
        res.json(users);
    } catch (error) {
        res.status(404).json({msg:"Page not found"});
    }
}

module.exports = {home, register, login, getAllUser}; 