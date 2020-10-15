import express from 'express';
import {getProductById,getProducts} from '../controllers/productController.js'
const router =express.Router();

//@route GET /api/products
//@desc Fetch all products
//@access Public
router.route('/').get(getProducts)

//@route GET /api/products/:id
//@desc Fetch single product 
//@access Public
router.route('/:id').get(getProductById)

export default router;