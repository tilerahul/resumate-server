const nodemailer = require('nodemailer');

const sendMail = (email, otp, name) =>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'tilerahul8068@gmail.com', 
            pass: 'iumz exhs clnp tckq'
        }
    });

    const mailOptions = {
        from: 'tilerahul8068@gmail.com',
        to: email,
        subject: 'OTP Verification',
        html : `<!DOCTYPE html>
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

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log('Error sending OTP:', error);
            return;
        }
    });
    return true;
}

module.exports = sendMail;