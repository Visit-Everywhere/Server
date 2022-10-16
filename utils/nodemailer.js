import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "xayrullohabduvohidov713@gmail.com",
    pass: "lnimdqkkmplprwdj",
  },
});

let mailer = (message) => {
  console.log(message);
  transporter.sendMail(message, (err, info) => {
    if (err) return console.log(err.message);
    console.log("ok", info);
  });
};

export default mailer;
