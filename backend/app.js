const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const connectDatabase = require('./config/connectDatabase');
const mongoose = require('mongoose');
const multer = require('multer');
const bodyParser = require('body-parser'); // Import bodyParser

dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

// Add CORS middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Import routes
const productData = require('./routes/productDataRoutes');
const user = require('./routes/userRoute');
const cartItem = require('./routes/cartItemRoute');
const productModel = require('./models/productDataModel');
// const uploadImage = require('./roures/imageRoute');

connectDatabase();

// Middleware
app.use(express.json()); // Parse incoming JSON requests
app.use(express.static('./public'));

// use bodyParser middleware
app.use(bodyParser.json());

// use multer package
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
  }
});

let maxSize = 2 * 1000 * 1000;
let upload = multer({
  storage: storage,
  limits: {
    fileSize: maxSize
  }
});

let uploadHandler = upload.single('file');
app.post('/api/v1/upload', (req, res) => {
  uploadHandler(req, res, async function(err) {
    if (err) {
      if (err.code === 'LIMIT_FILE_SIZE') {
        res.status(400).json({ message: "Maximum file size is 2 MB" });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
      return; 
    }

    if (!req.file) {
      res.status(400).json({ message: "No file uploaded!" });
    } else {
      const ImagefilePath = req.file.path; // Get the file path
      // Save the file path to MongoDB 
    
      try {
        const savedFile = await productModel.create({ ImagefilePath });
        console.log(savedFile)
        res.status(200).json({ message: "File uploaded and saved to MongoDB", savedFile });
      } catch (error) {
        console.error('Error saving file to MongoDB:', error);
        res.status(500).json({ message: "Error saving file to MongoDB" });
      }
    }
  });
});


// Mount routes
app.use('/api/v1/', productData);
app.use('/api/v1/', user);
app.use('/api/v1/', cartItem);
// app.use('/api/v1/', uploadImage);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} in ${process.env.NODE_ENV} mode`);
});
