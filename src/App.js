import React from 'react';
import './App.css';

import MyNavbar from './components/mynavbar/MyNavbar';
import Hero from './components/hero/Hero';
import AboutMe from './components/aboutme/AboutMe';
import Skills from './components/skills/Skills';
import Educations from './components/educations/Educations';
import PastProjects from './components/pastprojects/PastProjects';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';

function App() {
  return (
    <React.Fragment>
      <MyNavbar />
      <a name="home"></a>
      <Hero />
      <a name="aboutme"></a>
      <AboutMe />
      <a name="skills"></a>
      <Skills />
      <a name="educations"></a>
      <Educations />
      <a name="pastprojects"></a>
      <PastProjects />
      <a name="contacts"></a>
      <Contacts />
      <Footer />
    </React.Fragment>
  );
}

export default App;
