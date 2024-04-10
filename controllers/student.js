import studentModel from "../models/student.js";
export const getstudent = async (req,res) =>{
    try{
        const student = await studentModel.find();
        return res.status(200).json({status:true,data:student})
    } catch (error) {
        return res.status(400).json({status:false,message:'loi request failed'})
    }
}
export const getstudentByID = async (req,res) => {
   try{
    const id = req.params.id
    const student = await studentModel.find({_id:id});
    return res.status(200).json({status:true,data:student})
   }catch{
    return res.status(400).json({status:false,message:'loi request failed'})
   }
}
export const addstudent = async (req,res) =>{
   try{
    const body = req.body;
    const StudentModel = new studentModel(body)
    const student = await StudentModel.save()
    return res.status(200).json({status:true,data:student})
   }catch{
    return res.status(400).json({status:false,message:'sai'})
   }
}

export const updatestudent = async (req,res) =>{
   try{
    const body = req.body;
    const id = req.params.id;
    const student = await studentModel.findOneAndUpdate({_id:id},body,{new:true});
    return res.status(200).json({status:true,data:student})
   }catch{
        return res.status(400).json({status:false,data:student});
   }
}
export const deletestudent = async (req,res) =>{
    try {
        const id = req.params.id;
       const student = await studentModel.findOneAndDelete({_id:id})
        return res.status(200).json({status:true,data:student,message:"xoa sinh vien thanh cong"})
    } catch (error) {
        return res.status(400).json({status:false,message:'loi request '})
    }
}
