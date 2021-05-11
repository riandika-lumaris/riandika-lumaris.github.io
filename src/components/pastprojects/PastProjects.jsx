import React from 'react';
import PastProjectsItem from './PastProjectsItem';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PastProjects() {
  return (
    <div style={{ background: "#CFD8DC" }} className="pb-5">
      <Container>
        <Row>
          <Col>
            <h1 className="text-center font-weight-light mt-5">Notable Past Projects</h1>
            <h6 className="text-center mb-5">Click on each project to learn more</h6>
          </Col>
        </Row>
        <Row>
          <PastProjectsItem title="XSpot" imageSrc="xspot/1.png" url="https://www.microsoft.com/p/xspot/9n8hp8kwhf8q">
            <p>
              This is the first consumer app I have written. It lets you download images used in Windows Spotlight feature on Wiindows 10. 
              You can also share it or set it as your dekstop background. 
              This app runs on Windows 10 using technology called Universal Windows Platform (UWP).
            </p>
          </PastProjectsItem>
          <PastProjectsItem title="Sistem Manajemen Proposal Tugas Akhir Sekolah Tinggi Teknik Surabaya" imageSrc="uploadta/1.png">
            <p>
              This is my final project for the bachelor’s degree. It manages the whole submission process of all students’ final project proposal. 
              All students of Sekolah Tinggi Teknik Surabaya can upload their proposal and the teachers can give comments and requirements for the final project, all with this site.
            </p>
          </PastProjectsItem>
          <PastProjectsItem title="Ideatech 2015" imageSrc="ideatech/1.png">
            <p>
              Ideatech was a conference where all participants presented their research. 
              The system I built made it easy for all participants to upload their scientific paper as well as reviewers to review the uploaded papers.
              This system also handled the payment by all participants in this conference.
            </p>
          </PastProjectsItem>
        </Row>
      </Container>
    </div>
  )
}

export default PastProjects;