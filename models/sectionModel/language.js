const mongoose = require("mongoose");

const langaugeSchema = new mongoose.Schema({
    name : {type:String, require:true},
});

module.exports = new mongoose.model('Language', langaugeSchema);