import React, { Component } from "react";
import {  animateScroll as scroll } from "react-scroll";
import './styles.css'
import footerbg from '../../assets/footer.png'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
export default class index extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
        <Row className="footer-content">
          <img src={footerbg} alt="Footer"/>
        </Row>

    );
  }
}
