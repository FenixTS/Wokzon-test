const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const connetDatabase = require('./config/connectDatabase');
const mongoose = require('mongoose');

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
// const order = require('./routes/order');
const user = require('./routes/userRoute');
const cartItem = require('./routes/cartItemRoute');


connetDatabase();

// Middleware
app.use(express.json()); // Parse incoming JSON requests

// Mount routes
app.use('/api/v1/', productData); // Mount productData route at /api/v1/productData
// app.use('/api/v1/', order); // Mount orders route at /api/v1/order
app.use('/api/v1/', user); // Mount orders route at /api/v1/user
app.use('/api/v1/', cartItem); // Mount orders route at /api/v1/cartItem



// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server listening to Port ${process.env.PORT} in ${process.env.NODE_ENV}`);
});