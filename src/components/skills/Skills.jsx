import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SkillsItem from './SkillsItem';

function Skills() {
  return (  
    <div className="my-5 p-5 d-flex align-items-center" style={{ backgroundColor: "#F0F4C3", minHeight: "80vh" }}>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center font-weight-light mb-5">What I Am Able To Do</h1>
          </Col>
        </Row>
        <Row>
          <SkillsItem>PHP</SkillsItem>
          <SkillsItem>JavaScript</SkillsItem>
          <SkillsItem>NodeJS</SkillsItem>
          <SkillsItem>ReactJS</SkillsItem>
          <SkillsItem>GraphQL</SkillsItem>
          <SkillsItem>.NET Core</SkillsItem>
          <SkillsItem>Universal Windows Platform</SkillsItem>
          <SkillsItem>Java</SkillsItem>
          <SkillsItem>Python</SkillsItem>
          <SkillsItem>Microservices</SkillsItem>
          <SkillsItem>Software Design Pattern</SkillsItem>
          <SkillsItem>Software Engineering</SkillsItem>
        </Row>
      </Container>
    </div>
  );
}
 
export default Skills;