import User from "../models/userSchema.js";

export const userSignUp = async (req,res)=>{
    try{

        const exist = await User.findOne({username : req.body.username})
        if(exist)
        {
            return res.status(401).json("Username already exists");
        }
        const user = req.body;
        const newUser =  new User(user);
        await newUser.save();
        res.status(200).json('User is registered successfully');
    }
    catch(err)
    {
        console.log(err.message);
    }
}

export const userLogin = async(req,res)=>{
    try{
        let user = await User.findOne({username:req.body.username,password:req.body.password})
        if(user){
            return res.status(200).json(`${req.body.username} login successfully`)
        }
        else{
            return res.json('Invalid login');
        }

    }
    catch(err)
    {
        console.log(err);
    }
}

