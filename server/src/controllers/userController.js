import {addNewUser,getUserInfoById,getAllUsers,updateUserImage} from "../models/userModel.js";
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
            "id":response.id,
            "imageUrl":req.body.imageUrl
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
    console.log(req.body.imageUrl)

    const user = {
        "firstName":req.body.firstName,
        "lastName":req.body.lastName,
        "email":req.body.email,
        "phoneNumber":req.body.phoneNumber,
        "id":req.body.id,
        "imageUrl":req.body.imageUrl

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

async function updateImage(req,res){

    try{
        const image  = await updateUserImage(req.file,req.params.userId)
        req.body.image_url = image ? image.secure_url : null;
        req.body.image_name = req.file.originalname;
    }catch(err){
        res.status(500).send(err)
    }
}
export {addUser,sendUser,getUserById,getUsers,updateImage};