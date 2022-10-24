import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

let mailer = async (to, code) => {
  transporter.sendMail(
    {
      from: "xayrullohabduvohidov713@gmail.com",
      to, // to user
      subject: "Visit Everywhere",
      text: "",
      html: `
              <div style="max-width: 100%; background: #292B2E"; padding: 20px; >
                  <h3 style="color: #FFFFFF; margin: 0 auto;">Your activation code</h3>
                  <div style="display:flex; align-items: center; border:1px solid #a0a0a0"; border-radius: 12px; max-width: 500px;>
                      <h1 style="margin:0 auto; color: #FFFFFF;">${code}</h1>
                  </div>
              </div>
            `,
    },
    (err, info) => {
      if (err) return console.log(err.message);
      console.log("ok", info);
    }
  );
};
export default mailer;
