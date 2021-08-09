import express from 'express'
import { userSignUp,userLogin } from '../controller/userController.js';

const route = express.Router();

route.post('/signup',userSignUp);
route.post('/login',userLogin);



export default route;