import express from "express";
import { signupValidation, checkEmail, checkPassword } from "../middlewares/userMiddlewares.js";
import { addUser } from "../controllers/userController.js";
const router = express.Router();

router
  .route("/signup")
  .post(
    signupValidation, checkEmail, checkPassword,addUser
  )
    
  export default router;
