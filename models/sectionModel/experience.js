const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
    company : {type:String, require:true},
    jobTitle : {type:String, require:true},
    startDate:{type:Date},
    completionDate : {type:Date},
    description : {type:String},
});

module.exports = new mongoose.model('Experience', experienceSchema);