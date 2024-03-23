const User = require('../models/userModel');
const Review = require('../models/reviewModel');

const review = async (req, res) => {
    try {
        const { userId, name, rating, comment } = req.body;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const newReview = new Review({
            userId,
            name,
            rating,
            comment
        });
        const savedReview = await newReview.save();

        res.status(201).json(savedReview);

    } catch (error) {
        res.status(404).json({ message: "Page not found" });
    }
}

const getAllReview = async (req, res) => {
    try {
        const review = await Review.find();

        res.json(review);
    } catch (error) {
        res.status(404).json({ msg: "Page not found" });
    }
}

module.exports = { review, getAllReview };