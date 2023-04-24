const User = require("../models/User");


exports.register = async(req,res)=>{
    try {

        const user = await User.create(req.body)

        res.status(200).json({
            status: "Success",
            message:"Successfully Signed Up.",
            user
        })
        
    } catch (error) {
        res.status(400).json({
            status:"Fails",
            message:"Fails to Signup.",
            error: error.message,
        })
        
    }
}

exports.login = async(req,res,next)=>{
    try {
        const {email, password} = req.body;
         
        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: "Missing password or email."
            })
        }

    } catch (error) {
        
    }
}

