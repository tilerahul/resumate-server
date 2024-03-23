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
        text: `Your OTP (One-Time Password) for verification is: ${otp}`
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