import {addNewUser} from "../models/userModel.js";
import jwt from "jsonwebtoken";

async function addUser (req,res){
    const userInfo = req.body
    try{
        const response = await addNewUser(userInfo);
        if (response){
            const token = jwt.sign({response},process.env.JWT_SECRET,
                { expiresIn: "5h" })
            res.send({response,token})
        }
    }catch(err){
        res.status(500).send({"err":"server bad response"})
    }
}
export {addUser};