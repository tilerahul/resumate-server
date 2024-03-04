exports.basicDetailController = (req, res) =>{
    try {
        
    } catch (error) {
        res.status(404).json({
            success : false,
            messsage : "Internal Server Error"
        })
    }
}