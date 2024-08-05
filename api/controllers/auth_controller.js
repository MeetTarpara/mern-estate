import User from "../models/user_model.js";
import bcrypt from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';

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

// export const signin = async (req, res, next) => {
//     //data came from body
//     const { email, password } = req.body;

//     try {
//              //find user by email
//         const validUser = await User.findOne({ email }); 
//         //check if user exists
//         if (!validUser) { 
//             return next(errorHandler(404,"User Not Found"));
//         }  
//         //check if password is correct
//         const isMatch = bcrypt.compareSync(password, validUser.password);
//         if (!isMatch) {
//             return next(errorHandler(404,"Wrong Password"));
//         }
//         //generate and send token
//         const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
//         res
//         .cookie('access_token', token , {httpOnly : true})
//         .status(200)
//         .json(validUser)
        
//     } catch (error) {
//         next(error);
//     }

// }
export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const validUser = await User.findOne({ email });
      if (!validUser) return next(errorHandler(404, 'User not found!'));
      const validPassword = bcrypt.compareSync(password, validUser.password);
      if (!validPassword) return next(errorHandler(401, 'Wrong credentials!'));
      const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

      //for ignor password in responce
      const { password: pass, ...rest } = validUser._doc;
      res
        .cookie('access_token', token, { httpOnly: true })
        .status(200)
        .json(rest);
    } catch (error) {
      next(error);
    }
  };