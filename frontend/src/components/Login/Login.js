import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../context/AuthContext'; 

const Login = () => {
  const navigate = useNavigate(); 
  // const { login } = useAuth(); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
    
  // Hardcoded credentials
  const hardcodedUsername = 'admin';
  const hardcodedPassword = 'password123'; // Ensure this is a secure password in real applications

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setLoading(true);
  
    // Check if entered credentials match hardcoded ones
    if (username === hardcodedUsername && password === hardcodedPassword) {
      try {
        // If the credentials are correct, log in and navigate to the admin dashboard
        console.log('Login successful');
        // await login(); // Assuming your login function does some async work
        navigate('/admindashboard'); 
      } catch (err) {
        setError('Failed to login. Please try again.'); // Handle any errors during login
      }
    } else {
      setError('Invalid username or password'); // Set error for invalid credentials
    }

    setLoading(false); // Ensure loading state is reset
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="text-center mb-4">Admin Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username" className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="password" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
