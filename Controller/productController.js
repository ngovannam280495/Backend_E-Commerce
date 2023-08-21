import Product from '../Model/product.js';
import asyncHandler from 'express-async-handler';
// Creat Product
export const createProduct = asyncHandler(async (req, res, next) => {
  const { name, brand } = req?.body;
  const productExits = await Product.findOne({ name: name });
  if (productExits) throw new Error(`Product ${name} already exists`);
  const newProduct = await new Product({ name: name, brand: brand });
  await newProduct.save();
  res.status(201).json({
    status: 'success',
    message: 'Product created successfully',
    product: newProduct,
  });
});

// export const updateDeparmentProduct = asy;
