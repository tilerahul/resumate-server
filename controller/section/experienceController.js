exports.experienceController = (req, res) =>{
    try {
        const {company, jobTitle, startDate, completionDate, description} = req.body;

        if(!company || !jobTitle){
            return res.status(404).json({
                success : false,
                messsage : "Company and Job title is Mandatory !!"
            })
        }

        res.status(200).json({
            success : true,
            messsage : "Experience details added successfully"
        })
    } catch (error) {
        res.status(404).json({
            success : false,
            messsage : "Internal Server Error"
        })
    }
}