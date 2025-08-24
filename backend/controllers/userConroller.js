import userModel from "../models/userModel.js"
import validator from 'validator'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const createToken = (id)=>{
    return jwt.sign({id},)
}


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
            // hashing user password 
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password,salt)

            const newUser = new userModel({
                name,
                email,
                password:hashedPassword
            })

            const user = await newUser.save()


       } catch (error) {
        
       }
}

// route for admin login
const adminLogin = async (req,res)=>{

}


export {loginUser,registerUser,adminLogin}