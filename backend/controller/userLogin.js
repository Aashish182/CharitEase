
// const bcrypt = require('bcrypt');
// const userModel = require('../models/userModel');
// const jwt = require('jsonwebtoken');

// async function userLoginController(req,res) {
//     try{
//         const { email, password } = req.body;

//         if(!email){
//             throw new Error("Please Provide Gmail")
//         }
//         if(!password){
//             throw new Error("Please Provide Password")
//         }

//         const user = await userModel.findOne({email});

//     if(!user){
//         throw new Error("User Not Found");
//     }

//     const checkPassword = await bcrypt.compare(password,user.password);

//     if(checkPassword){
//         const tokenData ={
//             _id: user._id,
//             email: user.email,
//         }
//         const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: 60 * 60 * 8 });

//         const tokenOption = {
//             httpOnly : true,
//             secure : true
//         }

//         res.cookie("token",token,tokenOption).json({
//             message: "Login Successfully! ",
//             data: token,
//             success: true,
//             error: false
//         })

//     }else{
//         throw new Error(" Please check password.");
//     }


//     }catch(err){
//         res.json({
//             message: err.message || err,
//             error: true,
//             success: false,
//         })
//     }
// }

// module.exports = userLoginController;


const bcrypt = require('bcryptjs');
const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');

async function userLoginController(req, res) {
  try {
    const { email, password } = req.body;

    if (!email) return res.status(400).json({ message: "Please Provide Gmail", error: true });
    if (!password) return res.status(400).json({ message: "Please Provide Password", error: true });

    const user = await userModel.findOne({ email });
    if (!user) return res.status(404).json({ message: "User Not Found", error: true });

    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      return res.status(401).json({ message: "Please check password.", error: true });
    }

    const tokenData = {
      _id: user._id,
      email: user.email,
    };

    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: "8h" });

    const tokenOption = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
    };

    return res.status(200).cookie("token", token, tokenOption).json({
      message: "Login Successfully!",
      data: token,
      success: true,
      error: false,
    });

  } catch (err) {
    res.status(500).json({
      message: err.message || "Something went wrong",
      error: true,
      success: false,
    });
  }
}

module.exports = userLoginController;
