const express = require("express");
const multer = require("multer");

const app = express();
const port = 2000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // destination of the upload //
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("video"), (req, res) => {
  try {
    if (!req.file) {
      throw new Error("No file uploaded.");
    }

    res.status(200).send("File uploaded successfully :) !");
  } catch (error) {
    // Handle errors
    console.error("Error:", error.message);
    res.status(400).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
