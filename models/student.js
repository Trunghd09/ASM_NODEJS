
import mongoose from 'mongoose';
const studentSchema = mongoose.Schema({
    name: String,
    age: String,
    email: String,
    phone: String,
},
{
    timestamps: true,
})

const studentModel = mongoose.model('students', studentSchema)
export default studentModel