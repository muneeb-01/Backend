const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

const Mail = require("./Mail");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Chal gaya");
});

// to send a simple email
app.get("/sendMail", (req, res) => {
  res.send("Mail Send");

  const mail = Mail;
  mail.setSenderEmail("muneerahmed8556@gmail.com");
  mail.setCompanyName("MUNEEB MUGHAL");
  mail.sendTo("muneebmughal8556@gmail.com");
  mail.setSubject("Checking Nodemailer");
  mail.setText("Soo! Easy");
  mail.send();
});

// to send an html as a mail
app.post("/sendHTML", (req, res) => {
  let { receiver, subject, text, companyName, senderEmail, receiverName } =
    req.body;

  let html = fs.readFileSync(path.join(__dirname, "mail.html"), "utf8");
  html = html.replace("[Your_Name]", receiverName);
  html = html.replace("[Your_Name]", receiverName);
  html = html.replace("[Your Email Address]", receiver);

  res.send("Mail Send");

  const mail = Mail;
  mail.setSenderEmail(senderEmail);
  mail.setCompanyName(companyName);
  mail.sendTo(receiver);
  mail.setSubject(subject);
  mail.setText(text);
  mail.setHTML(html);
  mail.send();
});

//Announcement for multiple user
app.post("/sendmultiple", (req, res) => {
  let {
    receiver1,
    receiver2,
    subject,
    text,
    companyName,
    senderEmail,
    receiverName,
  } = req.body;

  let html = fs.readFileSync(path.join(__dirname, "Announcement.html"), "utf8");

  res.send("Mail Send");

  const mail = Mail;
  mail.setSenderEmail(senderEmail);
  mail.setCompanyName(companyName);
  mail.sendTo(receiver1);
  mail.sendTo(receiver2);
  mail.setCC(senderEmail);
  mail.setBCC(senderEmail);
  mail.setSubject(subject);
  mail.setText(text);
  mail.setHTML(html);
  mail.send();
});

//Announcement for multiple user
app.post("/sendAttachments", (req, res) => {
  let {
    receiver1,
    receiver2,
    subject,
    text,
    companyName,
    senderEmail,
    receiverName,
  } = req.body;

  let html = fs.readFileSync(path.join(__dirname, "Announcement.html"), "utf8");

  res.send("Mail Send");

  const mail = Mail;
  mail.setSenderEmail(senderEmail);
  mail.setCompanyName(companyName);
  mail.sendTo(receiver2);
  mail.sendTo(receiver1);
  mail.setAttachments({ filename: "img.jpg", path: "./img.jpg" });
  mail.setSubject(subject);
  mail.setText(text);
  mail.send();
});

// to send embedded image in email
app.post("/sendEmbeddedImg", (req, res) => {
  let { receiver, subject, text, companyName, senderEmail, receiverName } =
    req.body;

  let html = fs.readFileSync(path.join(__dirname, "sendimage.html"), "utf8");

  res.send("Mail Send");

  const mail = Mail;
  mail.setSenderEmail(senderEmail);
  mail.setCompanyName(companyName);
  mail.sendTo(receiver);
  mail.setSubject(subject);
  mail.setText(text);
  mail.setHTML(html);
  mail.setAttachments({
    cid: "img.jpg",
    filename: "img.jpg",
    path: "./img.jpg",
    contentDisposition: "inline",
  });
  mail.send();
});

app.listen(3000, () => console.log("Listening on port : 3000"));
