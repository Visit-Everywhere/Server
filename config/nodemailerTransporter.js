import nodemailer from 'nodemailer';

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: 'email',
      pass: '2 step verification code',
  }
})

export default ''