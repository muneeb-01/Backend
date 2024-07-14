const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "muneebmughal8556@gmail.com",
    pass: "pxpt xixr jvyc axug",
  },
});

class Mail {
  constructor() {
    this.mailOptions = {
      from: {},
    };
  }

  setCompanyName(name) {
    this.mailOptions.from.name = name;
  }

  sendTo(receiver) {
    let receivers = this.mailOptions.to || [];
    receivers.push(receiver);
    this.mailOptions.to = receivers;
  }

  setCC(CC) {
    let CCS = this.mailOptions.cc || [];
    CCS.push(CC);
    this.mailOptions.cc = CCS;
  }

  setBCC(BCC) {
    let BCCS = this.mailOptions.bcc || [];
    BCCS.push(BCC);
    this.mailOptions.bcc = BCCS;
  }

  setAttachments(attachment) {
    let attachments = this.mailOptions.attachments || [];
    attachments.push(attachment);
    this.mailOptions.attachments = attachments;
  }

  setSenderEmail(email) {
    this.mailOptions.from.address = email;
  }

  setText(text) {
    this.mailOptions.text = text;
  }

  setSubject(subject) {
    this.mailOptions.subject = subject;
  }

  setHTML(html) {
    this.mailOptions.html = html;
  }

  send() {
    transporter.sendMail(this.mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Email Sent : ${info.response}`);
      }
    });
  }
}

module.exports = new Mail();
