import React, { useState } from 'react';
import { postUserSignup } from '../../services/server.js';
import { Alert, Button, Form } from 'react-bootstrap';
import { useAuth } from '../../context/AuthProvider.js';
import { useNavigate } from 'react-router-dom';

function Signup(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [signupError, setSignupError] = useState("");
    const auth = useAuth();
    const navigate = useNavigate();
    const validPhoneNumber = ()=>{
  
      if (phoneNumber.slice(0,1)==="0" &&  phoneNumber.length<11 && phoneNumber.length>8){
        setSignupError("")
        return true;
      }else{
        setSignupError("Please insert valid phone number")
        return false;
      }
    }
    const handleSubmit = async (e) => {
      e.preventDefault();
      const validatePhoneNumber = validPhoneNumber();
      if(!validatePhoneNumber){
        return;
      }
      const response = await postUserSignup({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
        confirmPassword: confirmPassword
      }
      );
      console.log(response);
      if (response?.err) {
        setSignupError(response?.err);
      } else {
        setSignupError("");
        auth.login(response.data.user,response.data.token);
        navigate("/home")
      }
    };
  
    return (
        <Form>
          <Form.Group className="mb-3" controlId="formUserName">
            {signupError && <Alert variant="danger">{signupError}.</Alert>}
            <Form.Label>Your first name</Form.Label>
            <Form.Control
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              type="text"
              placeholder="Enter first name..."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formUserLastName">
            <Form.Label>Your last name</Form.Label>
            <Form.Control
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              type="text"
              placeholder="Enter last name..."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              placeholder="Enter email..."
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
              type="phoneNumber"
              autoComplete="off"
              placeholder="Enter phone number..."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              autoComplete="off"
              placeholder="Enter password..."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label>Confirm password</Form.Label>
            <Form.Control
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              type="password"
              autoComplete="off"
              placeholder="Enter Confirm Password..."
            />
          </Form.Group>
          <Button
            onClick={(e) => handleSubmit(e)}
            variant="success"
            type="submit"
          >
            Submit
          </Button>
        </Form>
    );
}

export default Signup;