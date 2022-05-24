import axios from "axios"

const API = axios.create({
    baseURL: "http://localhost:8080",
    withCredentials: true,
  });

const postUserLogin = async(email,password)=>{
    try{
        const response = await API.post("/login",{email,password});
        if (response){
            return response;
        }else{
            return {"err":"Wrong user name or password"}
        }
    }catch(err){
        console.log(err);
    }

}
const postUserSignup = async(userInfo)=>{
    console.log(userInfo)
    try{
        const response = await API.post("/signup",userInfo);
          if (response){
            return response;
        }else{
            return {"err":"Wrong user name or password"}
        }
    }catch(err){
        console.log(err);
    }
}
const postMessage = (message,token)=>{
    try{
        const response = API.post("/conversation",message,{
            headers: { Authorization: token },
        });
        return response;
    }catch(err){
        console.log(err);
    }
}
export {postUserLogin,postUserSignup,postMessage}