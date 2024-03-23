const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    userID : {
        type : mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User',
    },
    name : {
        type : String,
        require : true,
    },
    email : {
        type : String,
        require : true,
    },
    
    message : {
        type : String,
        require : true,
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
})

const Review = new mongoose.model("Review", reviewSchema);
module.exports = Review;