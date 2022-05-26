import {User} from "../connections/UsersDB.js";
import bcrypt from "bcrypt";
import {nanoid} from "nanoid";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs"
async function checkUniqueEmail(userInfo){
    const results = await User.find({"email":userInfo.email});
    if (results.length){
        return {"err":"registered email"};
    }
}
async function addNewUser(userInfo){
    const firstName = userInfo.firstName;
    const lastName = userInfo.lastName;
    const email = userInfo.email;
    const phoneNumber = userInfo.phoneNumber;
    const imageUrl = userInfo.imageUrl;
    const hashPassword = await bcrypt.hash(userInfo.password,7);
    const id = nanoid();
    console.log(1)

    const user = new User({
        firstName,
        lastName,
        email,
        phoneNumber,
        password:hashPassword,
        id,
        imageUrl
    });
    console.log(user)

    const results = await user.save();
    console.log(results);
    if (results){
        console.log(1)

        return user;
    }
}

async function getUserInfo(email){
    try{
        const response = User.find({"email":email});
        return response;
    }catch(err){
        console.log(err);
    }
}
async function getUserInfoById(userId){
    try{
        const response = User.find({"id":userId});
        return response;
    }catch(err){
        console.log(err);
    }
}
async function getAllUsers(){
    try{
        const response = User.find();
        return response;
    }catch(err){
        console.log(err)
    }
}

async function updateUserImage(file,userId){
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    try{
      const uploadResult = file && await cloudinary.uploader.upload(file.path);
      file && uploadResult && fs.promises.unlink(file.path);
        const updateImage = await User.updateOne({"id":userId},{$set:{"imageUrl":uploadResult.secure_url}});
      return uploadResult;
    }catch(err){
      console.log(err);
    }
  }
export {checkUniqueEmail,addNewUser,getUserInfo,getUserInfoById,getAllUsers,updateUserImage}