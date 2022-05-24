import {Conversation} from "../connections/conversationDB.js"

async function addNewConversation(senderId, reciverId){
    const conversation = new Conversation({members:[senderId,reciverId]});
    const results = await conversation.save();
    if (results){
        return conversation;
    }
}
async function getUserConversations(userId){
    try{
    const response = await Conversation.find({
        members: { $in:[userId] }
    });
    return response;
    }catch(err){
        return {"err":err}
    }
}
export {addNewConversation,getUserConversations}
