const sendMail = require('../Email-Sender/emailSender');
const OTP = require('../models/otpModel');

const otpSender = async (req, res) => {
    try {
        const { email } = req.body;
        const otp = Math.floor(100000 + Math.random() * 900000);

        const isSend = sendMail(email, otp);
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
        console.log(error);
        res.status(401).json({
            message: 'Error while sending email',
        })
    }
}

const otpVerify = async (req, res) => {
    try {
        const { email, otp } = req.body;

        const sendOtp = await OTP.findOne({ email }).limit(1);

        if (otp === sendOtp.otp) {
            return res.status(200).json({
                success: true,
                message: "OTP verification Done"
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