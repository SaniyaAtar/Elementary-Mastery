import express from 'express'
import dotenv from 'dotenv';
import morgan from 'morgan';
import  connectDB from './config/db.js';
import authRoute from './routes/authRoute.js';
import categoryRoutes from './routes/categoryRoutes.js'
import cors from 'cors';

dotenv.config();
connectDB();
const app= express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/api/v1/auth',authRoute);


app.get('/',(req,res)=>{
    res.send("<h1>welcome</h1>")
});
app.use('/api/v1/category',categoryRoutes)
const PORT=process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`.bgCyan.white)
})