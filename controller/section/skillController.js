exports.skillController = (req, res) =>{
    try {
        const {name} = req.body;

        if(!name){
            return res.status(404).json({
                success : false,
                messsage : "Name is Mandatory !!"
            })
        }

        res.status(200).json({
            success : true,
            messsage : "skill added save successfully"
        })
    } catch (error) {
        res.status(404).json({
            success : false,
            messsage : "Internal Server Error"
        })
    }
}