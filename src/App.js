import React from 'react';
import './global.css'
import Navbar2 from './components/NavBot'
import About from './pages/About'
import Experience from './pages/Experience'
import Education from './pages/Education'
import Services from './pages/Services_'
import Contact from './pages/Contact'
import Footer from './components/Footer'


function App() {
  return (

    <div>
      <Navbar2/>
      <About title ="Home" id="about"/>
      <Experience id ="experience"/>
      <Education id ="education"/>
      <Services id = "services"/>
      <Contact id = "contact"/>
      <Footer />
      

    </div>
    
  );
}

export default App;
