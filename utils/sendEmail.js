const nodemailer = require('nodemailer')

const sendEmail = (recipient, subject, text) => {
    const transporter = nodemailer.createTransport({
        service: 'Hotmail',
        auth: {
            user: 'wow-connect@outlook.com',
            pass: 'Connect123!'
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    const message = {
        from: 'wow-connect@outlook.com',
        to: recipient,
        subject: subject,
        text: text,
        html: undefined
    };
    transporter.sendMail(message, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

}

module.exports = sendEmail
