import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-center text-white" style={{ backgroundColor: '#ffffff' }}>
      <Container className="pt-4">
        <Row className="mb-4 justify-content-center">
          <Col xs="auto">
            <Button variant="link" className="text-dark m-1" href="#!">
              <FaFacebookF />
            </Button>
            <Button variant="link" className="text-dark m-1" href="#!">
              <FaTwitter />
            </Button>
            <Button variant="link" className="text-dark m-1" href="https://google.com">
              <FaGoogle />
            </Button>
            <Button variant="link" className="text-dark m-1" href="#!">
              <FaInstagram />
            </Button>
            <Button variant="link" className="text-dark m-1" href="#!">
              <FaLinkedin />
            </Button>
            <Button variant="link" className="text-dark m-1" href="https://github.com/tarunchauhan707">
              <FaGithub />
            </Button>
          </Col>
        </Row>
      </Container>

      <div className="text-center text-light p-3" style={{ backgroundColor: 'rgba(1, 1, 1, 1)' }}>
        © 2024 QuizApp, Inc. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
