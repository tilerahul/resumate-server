const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
    college : {type:String, require:true},
    degree : {type:String, require:true},
    completionDate : {type:Date},
    CGPA : {type:String},
    description : {type:String},
});

module.exports = new mongoose.model('Education', educationSchema);