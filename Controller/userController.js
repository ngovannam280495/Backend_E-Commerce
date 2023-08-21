import express from 'express';
import User from '../Model/user.js';
import { checkPassword, hashPassword } from '../Utils/hasspassword.js';
import { createToken } from '../Utils/jsonToken.js';
import asyncHandler from 'express-async-handler';

// Create User
export const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req?.body;
  // Check User exists
  const userExists = await User.findOne({ email: email });
  if (userExists) throw new Error(`User ${username} regist by email ${email} already exists`);
  const newPassword = await hashPassword(password);
  const newUser = await User.create({ email: email, password: newPassword, username: username });
  res.status(201).json({
    status: 'success',
    message: 'Registered successfully',
    user: newUser,
  });
});

// Login User
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req?.body;
  // Check User
  const userExist = await User.findOne({ email: email });
  if (!userExist) throw new Error('Account not found, please check your email address or register new account');
  const checkPass = await checkPassword(password, userExist?.password);
  if (!checkPass) throw new Error('Incorrect password');
  // Create token for login
  const username = userExist?.username;
  const payload = { username, email, password };
  const token = await createToken(payload);
  res.json({
    status: 'success',
    message: 'Login Successfully',
    user: userExist,
    token,
  });
});

// get User Login
export const getUserLogin = asyncHandler(async (req, res) => {
  const userLogin = req?.userLogin;
  res.status(200).json({
    status: 'success',
    user: userLogin,
  });
});
