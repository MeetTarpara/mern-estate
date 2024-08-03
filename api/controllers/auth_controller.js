import User from "../models/user_model.js";
import bcrypt from 'bcryptjs';

export const signup = async (req,res) => {
   
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
        res.status(400).json({ error: error.message });
        console.log(error);
    }

 
    // res.status(400).json({ error: error.message });

 
};
