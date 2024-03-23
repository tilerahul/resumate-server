const nodemailer = require('nodemailer');

const sendMail = (email, otp) =>{
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
        text: `Your OTP (One-Time Password) for verification is: ${otp}`,
        html : `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>OTP Verification</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                }
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                }
                .header {
                    text-align: center;
                    margin-bottom: 20px;
                }
                .otp-code {
                    font-size: 24px;
                    font-weight: bold;
                    text-align: center;
                    color: #007bff;
                    margin-bottom: 20px;
                }
                .info {
                    margin-bottom: 20px;
                    text-align : center;
                }
                .footer {
                    text-align: center;
                    margin-top: 20px;
                    font-size: 12px;
                    color: #777;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h2>OTP Verification By Resumate</h2>
                </div>
                <div class="otp-code">
                    Your OTP: <span id="otp">${otp}</span>
                </div>
                <div class="info">
                    Please use the above OTP to verify your email address.
                </div>
                <div class="footer">
                    <p>This email was sent automatically. Please do not reply.</p>
                    <p>The above verification code expire in 5 minutes.</p>
                </div>
            </div>
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