const nodemailer = require('nodemailer');

const LIVE_SERVER = 'mygarxefbxjdzalr'
const LOCALHOST = 'vlweakulqxomkvhk'

const sendMail = async (name, email) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: true,
        auth: {
          user: 'himanshusinghcoder@gmail.com',
          pass: LIVE_SERVER
        }
      });
      
      const mailOptions = {
        from: 'himanshusinghcoder@gmail.com',
        to: email,
        subject: `Hello`,
        text: `Hello ${name} thanks for contacting. I will get back to you soon.`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}

module.exports = sendMail