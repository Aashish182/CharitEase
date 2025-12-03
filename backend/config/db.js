const mongoose = require("mongoose")
let isconnected = false;

async function connectDB() {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        isconnected = true;
    }catch(err){
        console.log(err);
    }
}

module.exports =connectDB;