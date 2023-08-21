import express from 'express';
import { getUserLogin, loginUser, registerUser } from '../Controller/userController.js';
import authLoginUser from '../Middlewares/authLogin.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/userdetail', authLoginUser, getUserLogin);

export default userRouter;
