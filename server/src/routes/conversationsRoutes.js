import express from "express";
import { verifyToken } from "../middlewares/userMiddlewares.js";
import {createConversation,getConversations} from "../controllers/conversationController.js";

const router = express.Router();

router
  .route("/:userId")
  .get(/* verifyToken, */getConversations)

router
  .route("/")
  .post(
    /* verifyToken, */ createConversation
  ) 
  export default router;
