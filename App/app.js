import express from 'express';
import connectDB from '../Config/connectDB.js';
import dotenv from 'dotenv';
import userRouter from '../Routes/userRouter.js';
import { errorHandler } from '../Middlewares/handlerError.js';
import productRouter from '../Routes/productRouter.js';
dotenv.config();

const urlServer = process.env.URL_SERVER;
// Connect to database Mongo
connectDB();

const app = express();
app.use(express.json());

app.use(`${urlServer}/user`, userRouter);
app.use(`${urlServer}/product`, productRouter);
app.use(errorHandler);
export default app;
