import UserModel from "../models/user.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
export const Register = async (req, res) => {
    try {
        const body = req.body;
        const checkemail = await UserModel.findOne({ email: body.email })
        if (checkemail !== null) {
            return res.status(400).json({ status: false, message: 'Email đã tồn tại' })
        } else {
            body.password = await bcryptjs.hash(body.password, 10); 
            const user = await UserModel(body).save()
            user.password = undefined;
            res.send({
                status: true,
                message: "Đăng ký thành công",
                user: user
            })
        }
    } catch (error) {
        res.send({ status: false, message: "Lỗi đăng ký" })
    }
}

export const Login = async (req, res) => {
  try {
    const body = req.body;
    const user = await UserModel.findOne({ email: body.email });
    if (user === null) {
      res.send({ message: 'khong tim thay tai khoan' })
    } else {
      const verify = await bcryptjs.compare(body.password, user.password)
      if (verify) {
        const token = await jwt.sign({ id: user._id }, "123456")
        res.send({ status: true, message: 'dang nhap  thanh cong', token: token });
      } else {
        res.send({ status: false, message: 'Sai mật khẩu' })
      }
    }
  } catch (error) {
    res.send({ status: false, message: "Lỗi đăng nhập" })
  }
}