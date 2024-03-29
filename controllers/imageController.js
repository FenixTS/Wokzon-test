const multer = require('multer');


const maxSize = 2 * 1000 * 1000; // 2 megabytes

// Multer storage configuration
const storage = multer.diskStorage({
  // Configuration for storing uploaded files
  destination: function (req, file, cb) {
    cb(null, 'uploads'); // Destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use original filename
  }
});

// Multer upload configuration
const upload = multer({
  storage: storage,
  limits: {
    fileSize: maxSize // Limit file size
  }
});

// Middleware to handle single file uploads
const uploadHandler = upload.single('file');

// Route handler for POST /upload endpoint
exports.uploadImage = (req, res) => {
  // Using uploadHandler middleware to handle file upload
  uploadHandler(req, res, function(err) {
    if (err instanceof multer.MulterError) {
      // Multer error handling
      if (err.code === 'LIMIT_FILE_SIZE') {
        // Respond with error message if file size exceeds limit
        res.status(400).json({ message: "Maximum file size is 2 MB" });
      } else {
        // For other Multer errors, respond with generic error message
        res.status(500).json({ message: "File upload failed" });
      }
      return;
    } else if (!req.file) {
      // If no file is uploaded, respond with appropriate error message
      res.status(400).json({ message: "No file uploaded" });
    } else {
      // If file is uploaded successfully, respond with success message
      res.status(200).json({ message: "Uploaded to the server" });
    }
  });
};
