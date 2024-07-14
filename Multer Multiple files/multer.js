const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

// Set up storage configuration for Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads"); // Specify the destination directory
  },
  filename: function (req, file, cb) {
    const uniqueName = uuidv4();
    cb(null, uniqueName + path.extname(file.originalname)); // Rename the file with the current timestamp
  },
});

// Initialize Multer with the storage configuration
const upload = multer({ storage: storage });

module.exports = upload;
