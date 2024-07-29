const sendMail = require('../Email-Sender/emailSender');
const OTP = require('../models/otpModel');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');

const otpSender = async (req, res) => {
    try {
        const { email, name } = req.body;
        const otp = Math.floor(10000 + Math.random() * 90000);

        const mailOptions = {
            from: 'tilerahul8068@gmail.com',
            to: email,
            subject: 'OTP Verification',
            html: `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Email Verification OTP</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 10px;
                        padding: 0;
                        background-color: #f4f4f4;
                        text-align: center;
                    }
                    .logo {
                        max-width: 100px;
                        margin-bottom: 20px;
                        align-items: center;
                    }
                    .title {
                        font-size: 24px;
                        margin-bottom: 20px;
                    }
                    .message {
                        font-size: 16px;
                        margin-bottom: 30px;
                    }
                    .otp {
                        font-size: 24px;
                        color: #007bff;
                        margin-bottom: 30px;
                        font-weight: bold;
                    }
                    .footer {
                        font-size: 14px;
                        color: #666;
                    }
                    .warn{
                        font-size: 14px;
                        color: #fa0000;
                    }
                    .cName {
                        font-size: 14px;
                        color: #000000;
                        font-weight: bold;
                    }
                </style>
            </head>
            <body>
                    <img class="logo" src="https://cdn-icons-png.flaticon.com/512/6614/6614677.png" alt="Company Logo">
                    <h2 class="title">Email Verification</h2>
                    <p class="message">Hello <span class="cName">${name}</span>,</p>
                    <p class="message">Thank you for registering with <span class="cName">Resumate</span>. To complete your registration, please enter the following OTP:</p>
                    <p class="otp">${otp}</p>
                    <p class="footer">If you didn't request this, you can safely ignore this email.</p>
                    <p class="warn">Note : This OTP will expire in 5 minutes.</p>
                    <p class="footer">Best Regards,<br><p class="cName">Resumate - The Resume Builder</p> </br>
            </body>
            </html>
            `
        };

        const isSend = sendMail(email, otp, mailOptions, name);
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
            success: false,
            message: 'Error while sending email',
        })
    }
}
const resetOTP = async (req, res) => {
    try {
        const { email } = req.body;
        const userExist = await User.find({ email });

        if (!userExist) {
            return res.status(400).json({
                success: false,
                message: 'Email does not Exist !!',
            })
        }
        const otp = Math.floor(10000 + Math.random() * 90000);

        const mailOptions = {
            from: 'tilerahul8068@gmail.com',
            to: email,
            subject: 'OTP Verification',
            html: `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Password Reset</title>
                    <style>
                        body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        margin: 0;
                        padding: 0;
                        }
                        .email-container {
                        max-width: 600px;
                        margin: 0 auto;
                        background-color: #ffffff;
                        padding: 20px;
                        border: 1px solid #dddddd;
                        }
                        .header {
                        text-align: center;
                        padding: 10px 0;
                        background-color: #0073e6;
                        color: #ffffff;
                        }
                        .body {
                        padding: 20px;
                        color: #333333;
                        }
                        .body p {
                        margin: 10px 0;
                        }
                        .button-container {
                        text-align: center;
                        margin: 20px 0;
                        }
                        .button {
                        color: #0073e6;
                        padding: 10px 20px;
                        text-decoration: none;
                        border-radius: 5px;
                        font-size: large;
                        font-weight: bold;
                        }
                        .comp-name {
                        font-weight: bold;
                        }
                    </style>
                    </head>
                    <body>
                    <div class="email-container">
                        <div class="header">
                        <h1>Password Reset Request</h1>
                        </div>
                        <div class="body">
                        <p>Hi Dear,</p>
                        <p>We received a request to reset your password. Please enter the following OTP.</p>
                        <div class="button-container">
                            <p class="button">${otp}</p>
                        </div>
                        <br>
                        <p>If you did not request a password reset, please ignore this email or contact support if you have questions.</p>
                        <br>
                        <p>Best Regards,</p>
                        <p class="comp-name">Resumate - The Resume Builder</p>
                        </div>
                    </div>
                    </body>
                    </html>
            `
        };

        const isSend = sendMail(email, otp, mailOptions);
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
            success: false,
            message: 'Error while sending email',
        })
    }
}

const otpVerify = async (req, res) => {
    try {
        const { email, otp, formData } = req.body;
        const { firstName, lastName, phone, password } = formData;

        const sendOtp = await OTP.findOne({ email }).limit(1);

        if (otp === sendOtp.otp) {

            const hashPassword = await bcrypt.hash(password, 10);
            const imgUrl = `https://ui-avatars.com/api/?name=${firstName}+${lastName}`
            const userCreated = await User.create({ firstName, lastName, email, phone, password: hashPassword, imgUrl });

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
        return res.status(400).json({
            success: false,
            message: "Something went wrong !!"
        })
    }
}

const resetVerify = async (req, res) => {
    try {
      const { email, otp, password } = req.body;
      
      const userExist = await User.findOne({ email });
      if (!userExist) {
        return res.status(404).json({
          success: false,
          message: 'User not found',
        });
      }
  
      // Find the OTP entry
      const sendOtp = await OTP.findOne({ email }).limit(1);
      if (!sendOtp) {
        return res.status(400).json({
          success: false,
          message: 'OTP not found',
        });
      }
  
      // Check if the provided OTP matches
      if (otp === sendOtp.otp) {
        // Hash the new password
        const hashedPassword = await bcrypt.hash(password, 10);
  
        // Update the user's password
        const user = await User.findByIdAndUpdate(userExist._id, { password: hashedPassword }, { new: true });
  
        if (!user) {
          return res.status(400).json({
            success: false,
            message: 'Error while updating password',
          });
        }
  
        // Optionally, delete the OTP entry after use
        await OTP.deleteOne({ email });
  
        return res.status(200).json({
          success: true,
          message: 'Successfully Changed Password',
        });
      } else {
        return res.status(400).json({
          success: false,
          message: 'Invalid OTP',
        });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: 'Something went wrong',
      });
    }
  };

module.exports = { otpSender, otpVerify, resetOTP, resetVerify};