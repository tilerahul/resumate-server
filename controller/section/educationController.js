exports.educationController = (req, res) =>{
    try {
        const {college, degree, completionDate, CGPA, description} = req.body;

        if(!college || !degree){
            return res.status(404).json({
                success : false,
                messsage : "College and degree is Mandatory !!"
            })
        }

        res.status(200).json({
            success : true,
            messsage : "Education details added successfully"
        })
    } catch (error) {
        res.status(404).json({
            success : false,
            messsage : "Internal Server Error"
        })
    }
}