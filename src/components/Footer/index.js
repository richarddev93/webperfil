import React, { Component } from "react";
import {  animateScroll as scroll } from "react-scroll";
import './styles.css'
import footerbg from '../../assets/footer.png'
export default class index extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <div className="footer-container">
        <div className="footer-content">
          <img src={footerbg} width='1080' alt ="Vamos pra cima!" />
        </div>
      </div>
    );
  }
}
