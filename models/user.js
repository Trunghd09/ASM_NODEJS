import mongoose from "mongoose";
const UserSchema = mongoose.Schema({
    name: String,
    email:
    {
        type: String,
        unique: true
        
    },
    password:String
},
{
    timestamps: true
}
)
const UserModel = mongoose.model('users', UserSchema)
export default UserModel