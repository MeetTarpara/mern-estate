import User from "../models/user_model.js";
import bcrypt from 'bcryptjs';
import { errorHandler } from "../utils/error.js";

export const signup = async (req,res,next) => {
   
    //data came from body and save 
    const{ userName, email, password} = req.body;

    //for password synchronization
    const hashedPassword = bcrypt.hashSync(password, 10);
 
    //create new user
    const  newUser = new User({userName,email,password:hashedPassword});

    try{
        await newUser.save();
        res.status(201).json("User created successfully");

    }
    catch(error){
        next(error)

        // Using custom Error handling function   
        //   next(errorHandler(505,'From function'));  
    }

 
};

export const test1 = (req , res) => {
    res.json({
        message : "Hello World!!"
    })
};
