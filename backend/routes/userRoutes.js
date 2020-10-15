import express from 'express';
import {authUser} from '../controllers/userController.js'
const router =express.Router();


//@route POST /api/users/login
//@desc Authenticate users & get token
//@access Public
router.post('/login',authUser)


export default router;