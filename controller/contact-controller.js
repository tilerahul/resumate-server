const User = require('../models/userModel');
const Contact = require('../models/contactModel');

const contact = async(req, res) =>{
    try {
        const {userID, name, email, message} = req.body;

        if(!userID || !name || !email || !message){
            return res.status(400).json({
                success : false,
                message : 'All Fields are mandatory',
            })
        }
        const userExist = await User.findOne({email});
        if(!userExist){
            return res.status(400).json({
                success : false,
                message : 'Enter a registered email',
            })
        }
        
        const contactCreated = await Contact.create({userID, name, email, message});

        if(contactCreated){
            return res.status(200).json({
                success : true,
                message : 'Message send successfully',
            })
        }

    } catch (error) {
        res.status(404).json({message:"Page not found"});
    }
}

const getAllContact = async (req, res) =>{
    try {
        const contacts = await Contact.find();

        res.json(contacts);
    } catch (error) {
        res.status(404).json({msg:"Page not found"});
    }
}

module.exports = {contact, getAllContact};