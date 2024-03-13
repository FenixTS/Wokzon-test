// const cartItemModel = require("../models/cartItemsModel");


// exports.getCartItem = (req, res, next) => {
//     console.log(req.body,'DATA');

//      cartItemModel.getCartItem()

//     res.json(
//         {
//             success: true,
//             message: "cartItem works!"
//         }
//     )
// } this is the function concept /|\



//get function --------------------------------

const cartItemModel = require("../models/cartItemsModel");

exports.getCartItem = (req, res, next) => {
    console.log(req.body, 'DATA');

    // Assuming you want to fetch all cart items
    cartItemModel.find()
        .then(cartItems => {
            res.json({
                success: true,
                message: "Cart items fetched successfully",
                cartItems: cartItems // Optionally send the fetched cart items back in the response
            });
        })
        .catch(err => {
            console.error("Error fetching cart items:", err);
            res.status(500).json({
                success: false,
                message: "Failed to fetch cart items"
            });
        });
};

//get by id function ----------------------

exports.getCartItemById = (req, res, next) => {
    const cartItemId = req.params.id; // Assuming the ID is passed as a parameter in the URL
    
    // Assuming you have a cartItemModel defined and imported
    cartItemModel.findById(cartItemId)
        .then(cartItem => {
            if (!cartItem) {
                return res.status(404).json({
                    success: false,
                    message: "Cart item not found"
                });
            }
            res.json({
                success: true,
                message: "Cart item fetched by ID successfully",
                cartItem: cartItem // Send the fetched cart item back in the response
            });
        })
        .catch(err => {
            console.error("Error fetching cart item:", err);
            res.status(500).json({
                success: false,
                message: "Failed to fetch cart item by ID"
            });
        });
};


//post function----------------------------------
exports.PostCartItem = (req, res, next) => {    
    console.log(req.body, 'DATA');

    
    cartItemModel.create(req.body)
        .then(cartItem => {
            res.json({
                success: true,
                message: "Item added to cart successfully",
                cartItem: cartItem // Optionally send the created cart item back in the response
            });
        })
        .catch(err => {
            console.error("Error adding item to cart:", err);
            res.status(500).json({
                success: false,
                message: "Failed to add item to cart"
            });
        });
}; 

//Delete function ----------------------------------

exports.DeleteCartItem = (req, res, next) => {
    console.log(req.body, 'DATA');
    const itemId = req.params.itemId;
    // cartItemModel.deleteOne({ _id: req.body.itemId }) 
   
    cartItemModel.deleteOne({ _id: itemId }) // Assuming itemId is the unique identifier for the item
        .then(result => {
            if (result.deletedCount === 1) {
                res.json({
                    success: true,
                    message: "Item removed from cart successfully"
                });
            } else {
                res.status(404).json({
                    success: false,
                    message: "Item not found in cart"
                });
            }
        })
        .catch(err => {
            console.error("Error removing item from cart:", err);
            res.status(500).json({
                success: false,
                message: "Failed to remove item from cart"
            });
        });
};
