const Resume = require('../models/resumeModel');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
require('dotenv').config();

const resumeController = async(req, res) =>{
    try {
        const token = req.body.token;
        if(!token){
            return res.status(404).json({
                success : false,
                messsage : "Token Expires"
            })
        }
        const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const user = await User.findById(payload.userId);
        const resumeExist = await Resume.findOne({userId:user._id});

        if(resumeExist){
            return res.status(404).json({
                success : false,
                messsage : "Resume Already Created"
            })
        }

        const resume = await Resume.create({
            userId : user._id,
        })
        
        return res.status(200).json({
            success : true,
            messsage : "Resume Created !!",
            resume
        })

    } catch (error) {
        res.status(404).json({
            success : false,
            messsage : "Internal Server Error const"
        })
    }
}

module.exports = resumeController;