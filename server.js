import express from 'express';
import  mongoose from 'mongoose';
import studentRouter from './router/student.js';
import UserRouter from './router/user.js';
const app = express();
app.use(express.json());
app.use('/api', studentRouter)
app.use('/auth', UserRouter);
const connectDB = async ()=>{
    try{
        mongoose.connect(`mongodb://localhost:27017/student`)
        console.log(`Kết Nối Thành Công`);
    }catch{
        console.log(`Kết Nối Không Thành Công`);
    }
}
app.listen(4000,()=>{
    connectDB();
    console.log(`ket noi http://localhost:4000`);
})