const ProductModel = require('../models/productDataModel');


//Get Products API - /api/v1/productData
exports.getProductData = async (req, res, next) => {
    const productData = await ProductModel.find({});
    res.json(
       
        productData
    );
};

//Get Single Products API - /api/v1/product/:id
exports.getSingleProduct = async (req, res, next) => {
   
    try{
         // console.log(req.params.id, 'ID')
    const productData = await ProductModel.findById(req.params.id);

    res.json(
        
        productData
    );

    }
    catch (error)
    {
        res.json({
            success:false,
            // message:error.message
            message:'Unable to get product with that ID'
        })
    }
};

// post product API -


exports.PostProductData = (req, res, next) => {    
    console.log(req.body, 'DATA'); // Logging the request body for debugging

    // Check if the request body is empty or doesn't contain the required fields
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({
            success: false,
            message: "Request body is empty or missing required fields"
        });
    }

    // Create a new product using the ProductModel
    ProductModel.create(req.body)
        .then(productData => {
            // Send a JSON response indicating success along with the created product data
            res.status(201).json({
                success: true,
                message: "Product added successfully",
                productData: productData
            });
        })
        .catch(err => {
            // If there's an error during creation, send an error response
            console.error("Error adding product:", err);
            res.status(500).json({
                success: false,
                message: "Failed to add product",
                error: err.message // Optionally send the error message for debugging
            });
        });
}; 


// app.post('/submitForm', async (req, res) => {
//     try {
//         const formData = req.body;
//         const newProfession = new Profession(formData);
//         await newProfession.save();
//         res.status(201).json({ message: 'Form data saved successfully!' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'An error occurred while saving form data' });
//     }
// });
