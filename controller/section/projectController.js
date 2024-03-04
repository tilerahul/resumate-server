exports.projectController = (req, res) =>{
    try {
        const {name, startDate, completionDate, description} = req.body;

        if(!name || !description){
            return res.status(404).json({
                success : false,
                messsage : "Name and description is Mandatory !!"
            })
        }

        res.status(200).json({
            success : true,
            messsage : "Project details added successfully"
        })
    } catch (error) {
        res.status(404).json({
            success : false,
            messsage : "Internal Server Error"
        })
    }
}