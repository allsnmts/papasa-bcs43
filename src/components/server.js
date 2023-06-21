const express = require("express");
const multer = require("multer");
const app = express();

// Multer configuration
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});
const upload = multer({ storage });

// Upload endpoint
app.post("/uploads", upload.single("file"), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).json({ message: "No file provided" });
  }

  // Perform any necessary processing or saving of the file here

  res.status(200).json({ message: "File uploaded successfully" });
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
