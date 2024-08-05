import express from 'express';
import { signup, test1 } from '../controllers/auth_controller.js';

const router = express.Router();


router.get("/signup",test1);
router.post("/signup",signup);




export default router;