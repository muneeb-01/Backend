const express = require("express");
const router = express.Router();
const upload = require("../config/multer-config");
const fileModel = require("../models/file-model");
const { v4: uuid } = require("uuid");

router.post("/", (req, res) => {
  upload(req, res, async (err) => {
    if (!req.file) return res.json({ error: "Invalid data" });
    if (err) return res.json({ error: err.message });

    const file = await fileModel.create({
      filename: req.file.originalname,
      path: req.file.path,
      size: req.file.size,
      uuid: uuid(),
    });

    res.json({
      fileUrl: `${process.env.APP_BASE_URL}/files/${file.uuid}`,
      success: true,
    });
  });
});

module.exports = router;
