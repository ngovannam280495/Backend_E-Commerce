import User from '../Model/user.js';
import { checkToken } from '../Utils/jsonToken.js';
import asyncHandler from 'express-async-handler';

const authLoginUser = asyncHandler(async (req, res, next) => {
  const authLoginToken = req?.headers?.authorization.split(' ')[1];
  const dataLogin = await checkToken(authLoginToken);
  if (!dataLogin) throw new Error('Token is not valid or expired');
  const emailLogin = dataLogin.email;
  const userLogin = await User.findOne({ email: emailLogin });
  req.userLogin = userLogin;
  next();
});

export default authLoginUser;
