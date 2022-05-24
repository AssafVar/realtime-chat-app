import express from "express";
import { verifyToken } from "../middlewares/userMiddlewares.js";
import {addMessage,getConversationMessages} from "../controllers/messagesController.js"
const router = express.Router();

router
  .route("/:conversationId")
  .get(
    /* verifyToken, */ getConversationMessages
  )

router
  .route("/")
  .post(
    /* verifyToken, */ addMessage
  ) 
  export default router;
