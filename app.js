
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
   service: 'gmail',
   secure: false,
   port: 25,
   auth: {
     user: 'lkjnr01@gmail.com',
     pass: ''
   },
   tls: {
      rejectUnauthorized: false
   }
});

let HelperOptions = {
   from: '"Lk Jr" <lkjnr01@gmail.com',
   to: 'rasjoh@gmail.com',
   subject: 'Hello World!',
   text: 'This is my first test message sent using nodemailer!'
}
