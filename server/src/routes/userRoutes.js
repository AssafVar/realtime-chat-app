import express from "express";
import { signupValidation, checkEmail, checkPassword, loginValidation, varifyUser } from "../middlewares/userMiddlewares.js";
import { addUser,sendUser } from "../controllers/userController.js";
const router = express.Router();

router
  .route("/signup")
  .post(
    signupValidation, checkEmail, checkPassword, addUser
  )
router
  .route("/login")
  .post(
    loginValidation, varifyUser, sendUser
  ) 
  export default router;
