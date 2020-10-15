import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import {notFound,errorHandler} from './middleware/errorMiddleware.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
const app =express();
app.use(express.json())
dotenv.config()
connectDB();

app.get('/',async(req,res)=>{
    res.send('Api is running')
})
app.use('/api/products',productRoutes)
app.use('/auth/users',userRoutes)
app.use(notFound);
app.use(errorHandler)
const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`))