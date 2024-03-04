const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
    name : {type:String, require:true}
});

module.exports = new mongoose.model('Skill', skillSchema);