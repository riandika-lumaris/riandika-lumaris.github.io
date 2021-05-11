import React from 'react';
import './Contacts.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Envelope, Github, Linkedin, Twitter } from 'react-bootstrap-icons';
import ScrollAnimation from 'react-animate-on-scroll';

function Contacts() {
  return (
    <div style={{ background: "#263238" }} className="pb-5">
      <Container>
        <Row>
          <Col>
            <h1 className="text-center font-weight-light m-5 text-light">Let's Have a Chat</h1>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 4, offset: 2 }} className="mb-2">
            <ScrollAnimation animateIn="fadeInUp">
              <a href="mailto:riandika.lumaris@outlook.com" 
                 className="rounded d-block border border-light py-5 px-2 text-center contact-item">
                <Envelope className="display-4 mb-3" /><br/>
                riandika.lumaris@outlook.com
              </a>
            </ScrollAnimation>
          </Col>
          <Col md={4} className="mb-2">
            <ScrollAnimation animateIn="fadeInUp">
              <a href="https://twitter.com/r_lumaris" 
                 target="_blank" 
                 className="rounded d-block border border-light py-5 px-2 text-center contact-item">
                <Twitter className="display-4 mb-3" /><br/>
                @r_lumaris
              </a>
            </ScrollAnimation>
          </Col>
          <Col md={{ span: 4, offset: 2 }} className="mb-2">
            <ScrollAnimation animateIn="fadeInUp">
              <a href="https://linkedin.com/in/riandika-lumaris"
                 target="_blank" 
                 className="rounded d-block border border-light py-5 px-2 text-center contact-item">
                <Linkedin className="display-4 mb-3" /><br/>
                https://linkedin.com/in/riandika-lumaris
              </a>
            </ScrollAnimation>
          </Col>
          <Col md={4} className="mb-2">
            <ScrollAnimation animateIn="fadeInUp">
              <a href="https://github.com/riandika-lumaris"
                 target="_blank" 
                 className="rounded d-block border border-light py-5 px-2 text-center contact-item">
                <Github className="display-4 mb-3" /><br/>
                https://github.com/riandika-lumaris
              </a>
            </ScrollAnimation>
          </Col>
        </Row>
        <Row>
          <Col className="p-5 text-center text-light">
            <h3 className="font-weight-light mb-4">Want to buy me some coffee?</h3>
            <a href="https://paypal.me/riandikalumaris" target="_blank" className="btn btn-primary">
              Donate via PayPal
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contacts;