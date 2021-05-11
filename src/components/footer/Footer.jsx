import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className='p-3'>
      Created by Riandika Lumaris. &copy; 2021<br />
      Powered by <a rel="noreferrer" className="text-light" href="https://reactjs.org/" target="_blank">ReactJS</a>,&nbsp; 
      <a rel="noreferrer" className="text-light" href="https://react-bootstrap.github.io/" target="_blank">React Bootstrap</a>,&nbsp;
      <a rel="noreferrer" className="text-light" href="https://www.npmjs.com/package/react-bootstrap-icons" target="_blank">React Bootstrap Icon</a>,&nbsp; 
      <a rel="noreferrer" className="text-light" href="https://www.npmjs.com/package/react-animate-on-scroll" target="_blank">React Animation On Scroll</a>.
    </footer>
  )
}

export default Footer;