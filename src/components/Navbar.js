import React, { Component } from "react";
import logo from "../assets/logo.png";
import { Link, animateScroll as scroll } from "react-scroll";
import './styles.css'
export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <img
            src={logo}
            className="nav-logo"
            alt="Richard-Dev"
            onClick={this.scrollToTop}
          />
          <ul className="nav-items">
            <li className="nav-item">
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
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="experience"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Experiência
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="education"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Formação
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Serviços
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
