const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        require : true,
    },
    lastName : {
        type : String,
        require : true,
    },
    
    email : {
        type : String,
        require : true,
    },
    phone : {
        type : String,
        require : true,
    },
    password : {
        type : String,
        require : true,
    },
    cpassword : {
        type : String,
        require : true,
    },
    isAdmin : {
        type : Boolean,
        default : false,
    },
    joinedAt : {
        type : Date,
        default : Date.now,
    },
    imgUrl : {
        type : String,
    },
    resumeId : {
        type:mongoose.Schema.Types.ObjectId,
        ref : 'Resume'
    }
})

const User = new mongoose.model("User", userSchema);
module.exports = User;