import Ajv from "ajv";
import {signupSchema} from "../data/schema.js";
import addFormats from "ajv-formats"
import {checkUniqueEmail} from "../models/userModel.js"


const ajv = new Ajv();
addFormats(ajv);

function signupValidation(req, res, next) {
  const validate = ajv.compile(signupSchema);
  const valid = validate(req.body);
  if (valid) {
    next();
  } else {
    res.status(400).send({err:"Missing required fields"});
  }
}
async function checkEmail(req,res,next){
    try{
        const userInfo = req.body;
        const response = await checkUniqueEmail(userInfo);
        if (response?.err){
            res.send(response);
        }else{
            next();
        }
    }catch(err){
        res.status(400).send({"err":err});
    }
}
function checkPassword(req, res, next){
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    if (password===confirmPassword){
        next();
    }else{
        res.status(400).send({"err":"Passwords don't match"})
    }
}
export {signupValidation, checkEmail, checkPassword}