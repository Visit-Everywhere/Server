import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "xayrullohabduvohidov713@gmail.com",
    pass: "hxqmhcteiaiigaih",
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