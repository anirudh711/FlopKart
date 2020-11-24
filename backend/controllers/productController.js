import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

//@route GET /api/products
//@desc Fetch all products
//@access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

//@route GET /api/products/:id
//@desc Fetch single product
//@access Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

//@route DELETE /api/products/:id
//@desc Delete a product
//@access Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove();
    res.json({ message: "Product removed" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

//@route POST /api/products
//@desc Create Product
//@access Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: "Sample name",
    price: 0,
    user: req.user._id,
    image: "/images/sample.jpg",
    brand: "sample brand",
    category: "sample category",
    countInStock: 0,
    numReviews: 0,
    description: "Sample Description",
  });
  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

//@route PUT /api/products/:id
//@desc Update Product
//@access Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, brand, category, countInStock } = req.body;
  const product =await Product.findById(req.params.id)
  if(product){
    product.name=name
    product.price=price
    product.description=description
    product.brand=brand
    product.category=category
    product.countInStock=countInStock
  }else{
      res.status(404);
      throw new Error('Product not found')
  }
  const updatedProduct = await product.save();
  res.json(updatedProduct);
});

export { getProductById, getProducts, deleteProduct,createProduct,updateProduct };
