const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    name : {type:String, require:true},
    startDate:{type:Date},
    completionDate : {type:Date},
    description : {type:String, require:true},
});

module.exports = new mongoose.model('Project', projectSchema);