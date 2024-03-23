const User = require('../models/userModel');
const Review = require('../models/reviewModel');

const review = async(req, res) =>{
    try {
        

    } catch (error) {
        res.status(404).json({message:"Page not found"});
    }
}

const getAllReview = async (req, res) =>{
    try {
        const contacts = await Review.find();

        res.json(contacts);
    } catch (error) {
        res.status(404).json({msg:"Page not found"});
    }
}

module.exports = {review, getAllReview};