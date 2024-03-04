const mongoose = require("mongoose");

const basicDetailSchema = new mongoose.Schema({
    address : {type : String},
    Objective : {type : String, require:true},
    website : [{
        name :{
            type : String,
        },
        url : {
            type : String,
        }
    }], 
})

module.exports = new mongoose.model('BasicDetails', basicDetailSchema);