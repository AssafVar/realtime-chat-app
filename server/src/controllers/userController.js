import {addNewUser,getUserInfoById,getAllUsers} from "../models/userModel.js";
import jwt from "jsonwebtoken";


async function addUser (req,res){
    const userInfo = req.body;
    try{
        const response = await addNewUser(userInfo);
        const user = {
            "firstName":req.body.firstName,
            "lastName":req.body.lastName,
            "email":req.body.email,
            "phoneNumber":req.body.phoneNumber,
            "id":response.id
        }
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
        "id":req.body.id
    }
    const token = jwt.sign({user},process.env.JWT_SECRET,{ expiresIn: "5h" });
    res.send({user,token})
}

async function getUserById(req,res){
    const id = req.params.userId;
    try{
        const response = await getUserInfoById(id)
        res.send(response) ;
    }catch(err){
        res.status(500).send(err)
    }
}
async function getUsers(req,res){
    try{
        const response = await getAllUsers()
        res.send(response) ;
    }catch(err){
        res.status(500).send(err)
    }
}
export {addUser,sendUser,getUserById,getUsers};