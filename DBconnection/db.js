const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = async () => {
    
    const url = process.env.MONGODB_URL || "mongodb+srv://tilerahul8068:rahultile@resumateproject.cpofa7t.mongodb.net/"
    try {
        await mongoose.connect(url);
        console.log("Database Connected Successfully...")
    } catch (error) {
        console.log("Database Connection Failed...")
        console.log(error);
        
    }
}
module.exports = dbConnect;