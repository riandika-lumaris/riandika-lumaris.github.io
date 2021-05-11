import React from 'react';
import './Hero.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hero() {
  return (
    <Container fluid className="hero d-flex align-items-center justify-content-center text-center">
      <Row>
        <Col>
          <div>
            <h1 className="display-1">Welcome</h1>
            <h3 className="font-weight-light">This is a personal site of Riandika Lumaris</h3>
            <a href="#aboutme" className="mt-5 btn btn-outline-light btn-lg">Scroll Down to Learn More</a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;