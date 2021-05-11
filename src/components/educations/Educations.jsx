import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Journal } from 'react-bootstrap-icons';

function Educations() {
  return (
    <div className="mb-5">
      <Container>
        <Row>
          <Col>
            <h1 className="font-weight-light text-center mb-5">Educations</h1>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 4, offset: 2 }}>
            <ScrollAnimation animateIn="fadeInUp">
              <div className="p-3 mb-5 rounded text-center">
                <Journal className="display-4 mb-3" />
                <h3>Master Degree</h3>
                <h5>Information Technology</h5>
                Sekolah Tinggi Teknik Surabaya<br/>
                2014-2016
              </div>
            </ScrollAnimation>
          </Col>
          <Col md={4}>
            <ScrollAnimation animateIn="fadeInUp" delay={500}>
              <div className="p-3 mb-5 rounded text-center">
                <Journal className="display-4 mb-3" />
                <h3>Bachelor Degree</h3>
                <h5>Information Technology</h5>
                Sekolah Tinggi Teknik Surabaya<br/>
                2010-2014
              </div>
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Educations;