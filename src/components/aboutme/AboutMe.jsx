import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutMe() {
  return (
    <Container className="p-5">
      <Row>
        <Col className="text-center mb-3">
          <img src="mypic.jpg" width="240" className="rounded-circle" />
        </Col>
      </Row>
      <Row>
        <Col>
          <ScrollAnimation animateIn="fadeInRight">
            <h2 className="p-2 text-center">Riandika Lumaris</h2>
          </ScrollAnimation>
          <div className="p-2">
            <ScrollAnimation animateIn="fadeInRight">
              Hello, everyone! I am an experienced Web and Mobile App Developer. I have created many applications throughout my experience.
              Most of the applications I have built is used internally within a company to enchance their business flow. 
              Some applications I have built are made from scratch, others are just enchanced with new features and bug fixes.
              Furthermore, I have also built a consumer apps that everybody can use now, <b>including you!</b>
            </ScrollAnimation>
            <br/>
            <ScrollAnimation animateIn="fadeInRight">
            Please scroll below to see more info about me, including my past projects! Enjoy! 😁
            </ScrollAnimation>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;