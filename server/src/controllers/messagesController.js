import {addNewMessage,getAllMessages} from "../models/messagesModel.js"


async function addMessage(req,res){
    const conversationId = req.body.conversationId;
    const sender = req.body.sender;
    const text = req.body.text;
    try{
        const response = addNewMessage(conversationId, sender, text);
        res.send(response);
    }catch(err){
        res.status(500).send(err)
    }
}
async function getConversationMessages(req,res){
    const conversationId = req.params.conversationId;
    try{
        const response = await getAllMessages(conversationId);
        res.send(response);
    }catch(err){
        res.status(500).send(err)
    }
}
export {addMessage,getConversationMessages}