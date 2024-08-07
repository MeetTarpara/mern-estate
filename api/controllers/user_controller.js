import bcryptjs from 'bcryptjs';
import User from '../models/user_model.js';
import { errorHandler } from '../utils/error.js';


export const test = (req,res) => {
    res.status(200).json({ message: 'Hello from the API!' });
}

export const updateUser = async (req, res, next) => {
    const token = req.cookies.access_token;

    console.log("=============");

    if (req.user.id !== req.params.id)
      return next(errorHandler(401, 'You can only update your own account!'));
    try {
  
      if (req.body.password) {
        req.body.password = bcryptjs.hashSync(req.body.password, 10);
      }

      

  
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password,
            avatar: req.body.avatar,
          },
        },
        { new: true }
      );
     
  
      const { password, ...rest } = updatedUser._doc;
  
      res.status(200).json(rest);
    } catch (error) {
        console.log("--------");
      next(error);
    }
  };