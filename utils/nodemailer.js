import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_HOST,
    pass: process.env.SMTP_PASSWORD,
  }
});

let mailer = (message) => {
  transporter.sendMail(message, (err, info) => {
    console.log('what the ..');
    if (err) return console.log(err.message);
    console.log("ok", info);
  });
};

export default mailer;