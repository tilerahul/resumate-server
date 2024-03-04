const mongoose = require('mongoose');

const certificationSchema = new mongoose.Schema({
    title : {type:String, require:true},
    description : {type:String},
});

module.exports = new mongoose.model('Certification', certificationSchema);