import userModel from "../models/userModel.js"
import validator from 'validator'
import bcrypt from 'bcrypt'

//route for user login 
const loginUser  = async (req,res)=>{

}

//route for user registration
const registerUser = async (req,res)=>{
       try {
            const {name,email,password} = req.body
            //checking user alrerady exists or not
            const exists = await userModel.findOne({email});
            if(exists){
                return res.json({success:false,message:"User already Exists"})

            }
            //validating email format and strong password
            if (!validator.isEmail(email)) {
                return res.json({success:false,message:"Please enter a valid email"})

            }
            if (password.length < 8) {
                return res.json({success:false,message:"Please enter a strong password"})

            }


       } catch (error) {
        
       }
}

// route for admin login
const adminLogin = async (req,res)=>{

}


export {loginUser,registerUser,adminLogin}