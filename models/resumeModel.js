const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User',
    },
    basicDetails : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'BasicDetails'
    },
    educations : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Education'
    }],
    experiences : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Experience'
    }],
    skills : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Skill'
    }],
    projects : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Project'
    }],
    achievement: [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Achievement'
    }],
    certifaction : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Certificate'
    }],
    language : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Language'
    }],
    createdAt : {
        type : Date,
        default : Date.now,
    }
})

const Resume = new mongoose.model('Resume', resumeSchema);

module.exports = Resume;