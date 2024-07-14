const express = require("express");
require("./config/mongoose-connection");
const file = require("./Routes/files");
const File = require("./Routes/download-file");
const download = require("./Routes/Download");
const path = require("path");
require("dotenv").config();

const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/files", file);
app.use("/files", File);
app.use("/download", download);

app.get("/", (req, res) => {
  res.render("form");
});

app.listen(4000);
