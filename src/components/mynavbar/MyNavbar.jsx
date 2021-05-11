import React from 'react';
import './MyNavbar.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function MyNavbar() {
  return (
    <Navbar collapseOnSelect expand="md" fixed="top" className="navbar" style={{ position: 'sticky '}}>
      <Navbar.Brand href="#home">Riandika Lumaris</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Nav>
          <Nav.Link href="#aboutme">About Me</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#educations">Educations</Nav.Link>
          <Nav.Link href="#pastprojects">Past Projects</Nav.Link>
          <Nav.Link href="#contacts">Contacts</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;