import Ajv from "ajv";
import {signupSchema,loginSchema} from "../data/schema.js";
import addFormats from "ajv-formats"
import {checkUniqueEmail, getUserInfo} from "../models/userModel.js"
import { comparePasswords } from "../libs/services.js";


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

function loginValidation(req, res, next) {
    const validate = ajv.compile(loginSchema);
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
async function varifyUser (req, res, next){
    const email = req.body.email;
    const userInfo = await getUserInfo(email);
    if (userInfo.length){
        req.body.firstName = userInfo[0].firstName;
        req.body.lastName = userInfo[0].lastName;
        req.body.phoneNumber = userInfo[0].phoneNumber;
        req.body.id = userInfo[0].id;
        req.body.imageUrl = userInfo[0].imageUrl;
        const checkPassword = comparePasswords(userInfo[0].password,req.body.password);
        checkPassword?next():res.status(401).send("Wrong email or password");
    }else{
        res.status(401).send("Wrong email or password");
    }
}

function verifyToken(req, res, next) {
    const token = req.headers.authorization;
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        res.send({"err":"not valid token"});
      } else {
        next();
      }
    });
  }
export {signupValidation, checkEmail, checkPassword,loginValidation, varifyUser, verifyToken}