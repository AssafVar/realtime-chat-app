import React, { useState } from 'react';
import { postUserLogin } from '../../services/server.js';
import { Alert, Button, Form } from 'react-bootstrap';
import { useAuth } from '../../context/AuthProvider.js';

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isAuth, setIsAuth] = useState(null);
    const auth = useAuth();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await postUserLogin(email, password);
      if (!response?.err) {
        setIsAuth(false);
        auth.login(response.data.user,response.data.token);
      } else {
        setIsAuth(true);
      }
    };
    return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          {isAuth && (
            <Alert variant="danger">
              Can't login.Check email or password and try again.
            </Alert>
          )}
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
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
            placeholder="Password"
          />
        </Form.Group>
        <Button onClick={handleSubmit} variant="success" type="submit">
          Submit
        </Button>
      </Form>
    );
}

export default Login;