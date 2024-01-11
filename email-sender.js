const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
host: "smtp.gmail.com",
port: 465,
secure: true,
    auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

const mailOptions = {
  from: 'jasonjlel4@gmail.com',
  to: '@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});