const sendMail = require('../Email-Sender/emailSender');
const OTP = require('../models/otpModel');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const otpSender = async (req, res) => {
    try {
        const { email, name} = req.body;
        const otp = Math.floor(10000 + Math.random() * 90000);

        const isSend = sendMail(email, otp, name);
        if (isSend) {
            const otpCreate = await OTP.create({ email, otp });

            if (otpCreate) {
                return res.status(200).json({
                    success: true,
                    message: "OTP Has Been Send",
                    otpCreate
                })
            }
        } else {
            return res.status(200).json({
                success: false,
                message: "Error while sending OTP"
            })
        }


        if (isSend) {
            res.status(201).json({
                message: "Email Has Been Send Successfully"
            })
        } else {
            res.status(401).json({
                message: "Email not send"
            })
        }


    } catch (error) {
        res.status(401).json({
            success : false,
            message: 'Error while sending email',
        })
    }
}

const otpVerify = async (req, res) => {
    try {
        const { email, otp, formData } = req.body;
        const {firstName, lastName, phone, password} = formData;

        const sendOtp = await OTP.findOne({ email }).limit(1);

        if (otp === sendOtp.otp) {

            const hashPassword = await bcrypt.hash(password, 10);
            const imgUrl = `https://ui-avatars.com/api/?name=${firstName}+${lastName}`
            const userCreated = await User.create({firstName, lastName, email, phone, password:hashPassword, imgUrl});

            return res.status(200).json({
                success: true,
                message: "Registration Successful !!",
                userCreated
            })
        } else {
            return res.status(400).json({
                success: false,
                message: "Invalid OTP"
            })
        }

    } catch (error) {

    }
}

module.exports = { otpSender, otpVerify };