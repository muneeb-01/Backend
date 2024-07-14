const express = require("express");
const router = express.Router();
const fileModel = require("../models/file-model");

router.get("/:uuid", async (req, res) => {
  const uuid = req.params.uuid;
  const file = await fileModel.findOne({ uuid });

  if (!file) {
    return res.render("download", { error: "Link has been expired" });
  }

  const filePath = `${__dirname}/../${file.path}`;

  res.download(filePath);
});

module.exports = router;
