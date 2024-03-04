exports.achievementController = (req, res) =>{
    try {
        const {title, description} = req.body;

        if(!title){
            return res.status(404).json({
                success : false,
                messsage : "Title is Mandatory !!"
            })
        }

        res.status(200).json({
            success : true,
            messsage : "Achievement details added successfully"
        })
    } catch (error) {
        res.status(404).json({
            success : false,
            messsage : "Internal Server Error"
        })
    }
}