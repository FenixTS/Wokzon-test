const userModel = require("../models/usersModel");



//post user API - /api/v1/user
exports.postuser = async (req, res, next) => {
    const user = await userModel.find({});
    
    res.json(
        {
            success: true,
            message: "Order works!"
            
        }
    )
};

// const userModel = require("../models/usersModel");

// // Post user API - /api/v1/user
// exports.postUser = async (req, res, next) => {
//     try {
//         // Assuming req.body contains the user data to be created
//         const newUser = await userModel.create(req.body);
        
//         res.status(201).json({
//             success: true,
//             message: "User created successfully",
//             user: newUser
//         });
//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: "Failed to create user",
//             error: error.message
//         });
//     }
// };
