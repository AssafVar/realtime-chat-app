import express from "express";
import { signupValidation, checkEmail, checkPassword, loginValidation, varifyUser, verifyToken} from "../middlewares/userMiddlewares.js";
import { addUser,sendUser, getUserById ,getUsers} from "../controllers/userController.js";
const router = express.Router();

router
  .route("/signup")
  .post(
    signupValidation, checkEmail, checkPassword, addUser
  );
router
  .route("/login")
  .post(
    loginValidation, varifyUser, sendUser
  ); 
router
  .route("/:userId")
  .get(/* verifyToken, */ getUserById)
  router
  .route("/")
  .get(/* verifyToken, */ getUsers)
  export default router;
