import React, { useState } from 'react';
import './PastProjectsItem.css';
import ScrollAnimation from 'react-animate-on-scroll';
import Modal from 'react-bootstrap/Modal';

import Col from 'react-bootstrap/Col';

function PastProjects({ title, imageSrc, url, children }) {
  const [ isShown, setIsShown ] = useState(false);

  const handleMouseEvent = () => {
    setIsShown(!isShown);
  }

  const projectUrlButton = (url == null) ? null : (<Modal.Footer>
    <a href={url} className="btn btn-primary" target="_blank">Go To Project Site</a>
  </Modal.Footer>);

  return (
    <React.Fragment>  
      <Col md={6} onClick={handleMouseEvent} className="my-2">
        <ScrollAnimation animateIn="fadeInUp">
          <div className="projectItemContainer">
            <img src={imageSrc} width="100%" className="rounded thumbnail" />
            <div className="caption rounded-bottom">
              <h3>{title}</h3>
            </div>
          </div>
        </ScrollAnimation>
      </Col>
      <Modal show={isShown} onHide={handleMouseEvent} centered size="lg">
        <Modal.Header closeButton>{title}</Modal.Header>
        <Modal.Body>
          <img src={imageSrc} className="text-center mb-3" width="100%" /><br />
          {children}
        </Modal.Body>
        {projectUrlButton}
      </Modal>
    </React.Fragment>
  )
}

export default PastProjects;