import React from 'react';
import './global.css'
import NavBar from './components/Navbar'
import About from './pages/About'
import Experience from './pages/Experience'
import Education from './pages/Education'
import Services from './pages/Services_'
import Contact from './pages/Contact'


function App() {
  return (

    <div>
      <NavBar/>
      <About title ="Home" id="about"/>
      <Experience id ="experience"/>
      <Education id ="education"/>
      <Services id = "services"/>
      <Contact id = "contact"/>

    </div>
    
  );
}

export default App;
