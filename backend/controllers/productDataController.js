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

    res.json({
        
        productData
    })

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