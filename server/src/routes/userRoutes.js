import express from "express";
import { signupValidation, checkEmail, checkPassword, loginValidation, varifyUser, verifyToken} from "../middlewares/userMiddlewares.js";
import { addUser,sendUser, getUserById ,getUsers,updateImage} from "../controllers/userController.js";
import multer from "multer";

const router = express.Router();
const upload = multer({ dest: process.env.UPLOAD_FOLDER + "/" });

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
  .route("/image/:userId")
  .put(/* verifyToken, */upload.single("image"),updateImage)
  router
  .route("/")
  .get(/* verifyToken, */ getUsers)
  export default router;
