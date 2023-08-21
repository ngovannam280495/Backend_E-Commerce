import express from 'express';
import { createProduct } from '../Controller/productController.js';
import authLoginUser from '../Middlewares/authLogin.js';

const productRouter = express.Router();
productRouter.post('/create-product', authLoginUser, createProduct);
export default productRouter;
