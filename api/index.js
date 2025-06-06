import express from 'express';
import mongoose  from 'mongoose';
import cors from 'cors';


import dotenv from 'dotenv';
import userRouter from './routes/user_routes.js';
import authRouter from './routes/auth_route.js';
import cookieParser from 'cookie-parser';

import listingRouter from './routes/listing_route.js';

dotenv.config();

mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err)=>{
        console.log(err);
    });

const app= express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());


// app.use(bodyParser.json());


app.listen(3000,() => {
    console.log('Server is running on port 3000');
} )

app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);
app.use("/api/listing",listingRouter);



//use middeleware for error hendaling

app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 560;
    const message = err.message || 'Internal server Error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    });
});
