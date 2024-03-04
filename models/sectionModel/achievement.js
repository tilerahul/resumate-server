const mongoose = require("mongoose");

const achievementSchema = new mongoose.Schema({
    title : {type:String, require:true},
    description : {type:String},
});

module.exports = new mongoose.model('Achievement', achievementSchema);