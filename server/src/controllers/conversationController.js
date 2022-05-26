import { addNewConversation ,getUserConversations, checkConversation  } from "../models/conversationModel.js";

async function createConversation(req, res) {
  const senderId = req.body.senderId;
  const receiverId = req.body.receiverId;

  const searchChat = await checkConversation(senderId, receiverId);
  if (searchChat.length){
    res.send("Chat exist")
  }else{
  const response = await addNewConversation(senderId, receiverId);
  res.send(response);
  }
}
async function getConversations(req, res) {
  const userId = req.params.userId;
  try {
    const response = await getUserConversations(userId);
    if (response) {
      res.send(response);
    } else {
      res.status(500).send("Bad response");
    }
  } catch (err) {
    res.status(500).send({ err: err });
  }
}
export { createConversation, getConversations };
