// const userModel = require("../models/userModel");


// exports.createUser = (req, res, next) => {
//     console.log(req.body,'DATA');

//      userModel.create()

//     res.json(
//         {
//             success: true,
//             message: "User works!"
//         }
//     )
// }

// Get API /api/v1/user

// const cartItemModel = require("../models/cartItemsModel");

exports.getuser = (req, res, next) => {
    console.log(req.body, 'DATA');

    // Assuming you want to fetch all cart items
    userModel.find()
        .then(user => {
            res.json({
                success: true,
                message: "Cart items fetched successfully",
                user: user // Optionally send the fetched cart items back in the response
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

//post function for user


const userModel = require("../models/userModel");

exports.PostUser = (req, res, next) => {
    console.log(req.body,'DATA');

    // Pass req.body to the create function to create a user with the data
    userModel.create(req.body)
        .then(user => {
            res.json({
                success: true,
                message: "User created successfully",
                user: user // Optionally send the created user back in the response
            });
        })
        .catch(err => {
            console.error("Error creating user:", err);
            res.status(500).json({
                success: false,
                message: "Failed to create user"
            });
        });
};


