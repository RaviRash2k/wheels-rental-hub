import User from "../models/userModel.js";
import bcrypt from 'bcryptjs';
import validator from 'validator';

//register user
const register = async (req, res) => {
    try {
        const { name, email, password, rePassword } = req.body;

        // check existing user
        const existingUser = await User.findOne({ email });
        if (existingUser) {
        return res.json({ message: "Email already registered" });
        }

        //valid email
        if(!validator.isEmail(email)){
            return res.json({success: false, message: "Enter valid email!"})
        }

        //password matched?
        if(password !== rePassword){
            return res.json({success: false, message: "Re-enter above password!"})
        }

        //password strong
        if(!password || password.length < 8){
            return res.json({success: false, message: "password is not strong!"})
        }

        //hashing password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        // create user
        const newUser = new User({
        name,
        email,
        password: hashPassword
        });

        const user = await newUser.save();
        res.json({success: true, message: "Registration successful"});

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}

export {register}