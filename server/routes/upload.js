import express from "express";
import multer from "multer";
import { uploadToS3 } from "../services/s3Uploader";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;
    if (!file) return res.status(400).json({ message: "No file uploaded" });

    const url = await uploadToS3(file);
    res.status(200).json({ url });
  } catch (err) {
    console.error("Upload Error:", err);
    res.status(500).json({ message: "Upload failed" });
  }
});

module.exports = router;
