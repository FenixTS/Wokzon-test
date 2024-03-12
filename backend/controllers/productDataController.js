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

// post product API -

exports.PostProductData = async (req, res, next) => {
   
    try{
         // console.log(req.params.id, 'ID')
    const productData = await ProductModel.create(req.params.id);

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


// exports.PostProductData = (req, res, next) => {    
//     console.log(req.body, 'DATA');

    
//     ProductModel.create(req.body)
//         .then(productData=> {
//             res.json({
//                 success: true,
//                 message: "Item added to ProductData successfully",
//                 productData: productData 
//             });
//         })
//         .catch(err => {
//             console.error("Error adding item to ProductData:", err);
//             res.status(500).json({
//                 success: false,
//                 message: "Failed to add item to ProductData"
//             });
//         });
// }; 

