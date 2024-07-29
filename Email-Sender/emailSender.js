const nodemailer = require('nodemailer');

const sendMail = (email, otp, mailOptions, name = 'Dear') =>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'tilerahul8068@gmail.com', 
            pass: 'iumz exhs clnp tckq'
        }
    });

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log('Error sending OTP:', error);
            return;
        }
    });
    return true;
}

module.exports = sendMail;