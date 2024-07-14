const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;
const upload = require("./multer");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/images", express.static(path.join(__dirname, "public/uploads")));

// Set up an endpoint to handle multiple file uploads
app.post("/upload", upload.array("files", 10), (req, res) => {
  try {
    const urls = req.files.map((file) => {
      return `http://localhost:3000/images/${file.filename}`;
    });
    console.log(urls);
    res.send("Files uploaded successfully");
  } catch (error) {
    res.status(400).send("Error uploading files");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
