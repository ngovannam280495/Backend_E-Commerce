import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const secretKey = process.env.SECRET_KEY_TOKEN;
const createToken = async (payload) => {
  try {
    const token = await jwt.sign(payload, secretKey, { expiresIn: '1h' });
    return token;
  } catch (error) {
    console.log(error);
  }
};

const checkToken = async (token) => {
  try {
    const checkToken = await jwt.verify(token, secretKey);
    return checkToken;
  } catch (error) {
    console.log(error);
  }
};

export { createToken, checkToken };
