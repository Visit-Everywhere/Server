let mailer = message => {
  transporter.sendMail(message, (err, info) => {
      if (err) return console.log(err.message);
      console.log('ok', info);
  })
}

export default mailer