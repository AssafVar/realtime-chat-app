import {addNewUser} from "../models/userModel.js";
import jwt from "jsonwebtoken";

async function addUser (req,res){
    const userInfo = req.body;
    const user = {
        "firstName":req.body.firstName,
        "lastName":req.body.lastName,
        "email":req.body.email,
        "phoneNumber":req.body.phoneNumber,
    }
    try{
        const response = await addNewUser(userInfo);
        if (response){
            const token = jwt.sign({user},process.env.JWT_SECRET,
                { expiresIn: "5h" })
            res.send({user,token})
        }
    }catch(err){
        res.status(500).send({"err":"server bad response"})
    }
}

async function sendUser (req,res){
    const user = {
        "firstName":req.body.firstName,
        "lastName":req.body.lastName,
        "email":req.body.email,
        "phoneNumber":req.body.phoneNumber,
    }
    const token = jwt.sign({user},process.env.JWT_SECRET,{ expiresIn: "5h" });
    res.send({user,token})
}
export {addUser,sendUser};