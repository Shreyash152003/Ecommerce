import multer from "multer";

// 1. Define storage settings
const storage = multer.diskStorage({
    filename: function (req, file, callback) {
        // This decides how the uploaded file will be named
        callback(null, file.originalname)
    }
})
// 2. Create the upload middleware using the storage config
const upload = multer({ storage })
// 3. Export it to use in routes
export default upload



/*import multer from "multer";
import fs from "fs";
import express from 'express'

// Ensure "uploads" folder exists
const uploadPath = "uploads";
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, uploadPath); // save files in "uploads" folder
  },
  filename: function (req, file, callback) {
    // save file with unique name
    callback(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

export default upload;*/
