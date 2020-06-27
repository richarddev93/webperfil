import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../../assets/logo.png";
import './styles.css'

const index = () => {

   const  scrollToTop = () => {
        scroll.scrollToTop();
   };

    return (
        
            <Navbar  collapseOnSelect expand="lg" className="nav justify-content-between" fixed="top" variant="dark">
                <Container className="container-nav">
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        className="nav-logo"
                        alt="Richard-Dev"
                        onClick={scrollToTop}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className ="ml-auto" activeKey="/home"  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
                        <Nav.Item>
                        <div className="nav-item">

                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Sobre
                            </Link>
                            </div>
                        </Nav.Item>
                        <Nav.Item>
                            <div className="nav-item">
                                <Link
                                activeClass="active"
                                to="experience"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500} >
                                Experiência
                                </Link>
                            </div>
                        </Nav.Item>
                        <Nav.Item>
                            <div className="nav-item">
                                <Link
                                activeClass="active"
                                to="education"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500} >
                                Formação
                            </Link>
                            </div>
                        </Nav.Item>
                        <Nav.Item>
                            <div className="nav-item">
                                <Link
                                    activeClass="active"
                                    to="services"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500} >
                                    Serviços
                                </Link>
                            </div>
                        </Nav.Item>
                        <Nav.Item>
                        <div className="nav-item">
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500} >
                                Contato
                            </Link>
                        </div>
                    </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
                </Container>            
            </Navbar>
        
    )  
}

export default index
