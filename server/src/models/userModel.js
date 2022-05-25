import {User} from "../connections/UsersDB.js";
import bcrypt from "bcrypt";
import {nanoid} from "nanoid";

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
    const hashPassword = await bcrypt.hash(userInfo.password,7);
    const id = nanoid();
    const user = new User({
        firstName,
        lastName,
        email,
        phoneNumber,
        password:hashPassword,
        id,
    });
    const results = await user.save();
    if (results){
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
export {checkUniqueEmail,addNewUser,getUserInfo,getUserInfoById,getAllUsers}