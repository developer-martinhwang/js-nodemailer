const nodemailer = require('nodemailer')
require ('custom-env').env('staging')
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NODEMAILER_AUTH_USER,
        pass: process.env.NODEMAILER_AUTH_PASS
    }
}) 

const mailOptions = {
    from: process.env.NODEMAILER_AUTH_USER,
    to: 'hic0811@gmail.com',
    subject: 'Sending Email using Node.js',
    html: '<h1>Welcome</h1><p>That was easy!</p>'
}

transporter.sendMail(mailOptions, function(err, info){
    if(err){
        console.log(err)
    } else {
        console.log('Email sent:' + info.response)
    }
})