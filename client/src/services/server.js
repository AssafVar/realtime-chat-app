import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true,
});

const postUserLogin = async (email, password) => {
  try {
    const response = await API.post("/login", { email, password });
    if (response) {
      return response;
    } else {
      return { err: "Wrong user name or password" };
    }
  } catch (err) {
    console.log(err);
  }
};
const postUserSignup = async (userInfo) => {
  console.log(userInfo);
  try {
    const response = await API.post("/signup", userInfo);
    if (response) {
      return response;
    } else {
      return { err: "Wrong user name or password" };
    }
  } catch (err) {
    console.log(err);
  }
};

const getConversations = async(userId, token) => {
  try {
    const response = await API.get(`/conversations/${userId}`, {
      headers: { Authorization: token },
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};

const getUserById = async(userId,token)=>{
    try{
        const response = await API.get(`/${userId}`, {
            headers: { Authorization: token },
          })
        return response;
    }catch(err){
        console.log(err)
    }
}
const getChatMessages = async(conversationId,token)=>{
    try{
        const response  =await API.get (`/messages/${conversationId}`, {
            headers: { Authorization: token },
          });
        return response;
    }catch(err){
        console.log(err);
    }
}
const postMessage = (sender,conversationId,text,token) => {
  try {
    const response = API.post("/messages",{sender, conversationId,text}, {
      headers: { Authorization: token },
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};
const getAllUsers = async(token)=>{
    const allUsers = await API.get("/", {
        headers: { Authorization: token },
      });
      return allUsers;
}
const connectUser  = async(senderId, receiverId, token)=>{
    const allUsers = await API.post("/conversations",{senderId,receiverId}, {
        headers: { Authorization: token },
      });
      return allUsers;
}
export { postUserLogin, postUserSignup, postMessage, getConversations,getUserById ,getChatMessages,getAllUsers,connectUser};
