import React, { useRef } from "react";
import "./contacts.css";
import Contact from "./Contact";
import { useEffect } from "react";
import { useAuth } from "../../context/AuthProvider.js";
import { getConversations,getChatMessages,postMessage } from "../../services/server.js";
import { useState } from "react";
import Messages from "../messages/Messages";
import { Button, Col, Container, Row } from "react-bootstrap";
import Users from "../users/Users";

function Contacts(props) {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState("");
  const [messageToSend, setMessageToSend] = useState('');
  const [newMessage,setNewMessage] = useState(false)

  const [error, setError] = useState(null);
  const auth = useAuth();
  useEffect(() => {
    const fetchConversations = async () => {
      const response = await getConversations(auth.user.id, auth.token);
      if (response?.err) {
        setConversations("could not get the conversations");
      } else {
        setConversations(response.data);
      }
    };
    fetchConversations();
  }, []);

    useEffect(()=>{
        const getMessages = async()=>{
            try{
                const response = await getChatMessages(currentChat?._id,auth.token);
                setMessages(response.data);
            }catch(err){
                console.log(err)
            }
        }
        getMessages()
    },[currentChat],[newMessage]);
    //console.log(currentChat);
    const handleSubmit = async()=>{
      console.log(auth.user.id,currentChat,messageToSend);
      const response = await postMessage(auth.user.id,currentChat._id,messageToSend,auth.token);
      setMessageToSend('')
      response&&setNewMessage(!newMessage)
  }
  return (
    <Container>
      <Row className="my-3">
        <Col md={3} xs={4}>
          <div className="contacts">
            <h4>Contacts</h4>
            {conversations &&
              conversations.map((conversation) => (
                  <div onClick={()=>setCurrentChat(conversation)}>
                <Contact conversation={conversation} currentUser={auth.user} />
                </div>
              ))}{" "}  
          </div>{" "}
        </Col>
        <Col md={6} xs={8}>
          <Messages chatMessages={messages}/>
          <div className="messsge-text"> 
          <textarea placeholder="Type message..." value={messageToSend} onChange={(e)=>setMessageToSend(e.target.value)}></textarea>
          <Button onClick={handleSubmit}>Send</Button>
          </div>
        </Col>
        <Col md={3} className="d-none d-md-block">
          <Users />
        </Col>
      </Row>
    </Container>
  );
}

export default Contacts;
