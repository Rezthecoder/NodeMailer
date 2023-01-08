const nodemailer = require('nodemailer');


const sendMail = async(req, res) => {
    let testAccount = await nodemailer.createTestAccount();
    const transporter = await nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'deanna.prohaska@ethereal.email',
            pass: 'vCQ3Th8GFjvAhbUm4a'
        }
    });

    const info = await transporter.sendMail({
        from: '"Suresh 👻" <suresh@gmail.com>', // sender address
        to: "thehacker@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    console.log(testAccount);



    res.json(info);

}
module.exports = sendMail;