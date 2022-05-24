import { Message } from "../connections/messagesDB.js";

async function addNewMessage(conversationId, sender, text){
    const message = new Message({conversationId,sender,text});
    const results = await message.save();
    if (results){
        return message;
    }
}

async function getAllMessages(conversationId){
    const messages = await Message.find({
        conversationId
    });
    return messages;
}

export {addNewMessage,getAllMessages}