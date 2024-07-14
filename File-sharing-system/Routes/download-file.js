const express = require("express");
const router = express.Router();
const fileModel = require("../models/file-model");
router.get("/:uuid", async (req, res) => {
  try {
    const uuid = req.params.uuid;
    const file = await fileModel.findOne({ uuid });
    if (!file) return res.render("index", { error: "Link has been expired" });

    return res.render("index", {
      uuid: file.uuid,
      fileName: file.filename,
      fileSize: file.size,
      downloadLink: `${process.env.APP_BASE_URL}/download/${file.uuid}`,
    });
  } catch (error) {
    res.render("index", { error: " Something went wrong!!!" });
  }
});

module.exports = router;
