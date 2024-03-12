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
