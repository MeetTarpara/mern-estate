import express from 'express';
import { google, signin, signup, test1 } from '../controllers/auth_controller.js';

const router = express.Router();


router.get("/signup",test1);
router.post("/signup",signup);
router.post("/signin",signin);
router.post('/google', google)




export default router;