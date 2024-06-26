const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const connectDatabase = require('./config/connectDatabase');
const mongoose = require('mongoose');
const multer = require('multer');             
const cors = require('cors');


dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

// Add CORS middleware
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   next();
// });

// Import routes
const productData = require('./routes/productDataRoutes');
const user = require('./routes/userRoute');
const cartItem = require('./routes/cartItemRoute');
const productModel = require('./models/productDataModel');
const userModel = require('./models/userModel');
// const uploadImage = require('./roures/imageRoute');

connectDatabase();

// Middleware
app.use(express.json()); // Parse incoming JSON requests
app.use(express.static('./'));  // image path declaration for image api
app.use(cors());

// Global error handler middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
});

// use bodyParser middleware
// const bodyParser = require('body-parser'); 
// app.use(bodyParser.json());


// use multer package
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './Images');
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

app.post('/api/v1/upload', upload.single('image'), (req, res) => {
  const {
    firstName,
    lastName,
    profession,
    category, 
    address,
    district,
    state,
    postalCode,
    email,
    phoneNumber,
    whatsAppNumber,
    salary,
    description,
    createProfessionAccount} = req.body;
   
    
  const imagePath = req.file.path;
 

  const formData = new productModel({
    firstName,
    lastName,
    profession,
    category,
    address,
    district,
    state,
    postalCode,
    email,
    phoneNumber,
    whatsAppNumber,
    salary,
    description,
    imagePath,
    createProfessionAccount
  });

  formData.save()
  .then(() => {
      res.status(200).send('Data saved successfully');
  })
  .catch(err => {
      console.error(err);
      res.status(500).send('Error saving data to database');
  });

});
// register page api function 


app.post('/api/v1/Register-upload', upload.single('image'), (req, res) => {
  const {
    name,
    phone,
    email,
    password
  } = req.body;
   
  
  const imagePath = req.file.path;
  console.log(imagePath,'imagePath')
  const formData = new userModel({
    name,
    phone,
    email,
    password,
    imagePath // assuming imagePath is where you want to store the uploaded image
  });

  formData.save()
    .then(() => {
      res.status(200).send('Data saved successfully');
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error saving data to database');
    });
});


// Mount routes
app.use('/api/v1/', productData);
app.use('/api/v1/', user);
app.use('/api/v1/', cartItem);
// app.use('/api/v1/', uploadImage);

// // production script
app.use(express.static("./client/build"));

// Serve the React app for any other requests
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} in ${process.env.NODE_ENV} mode`);
});






