import React from "react";
import {  Link } from "react-scroll";
import './styles.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function index() {


  return (
    <Row className="footer-container">
      <Container>
        <Row>
          <Col md="auto">
            <h3>MAPA DO SITE</h3>
            <ul>
              <li>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                  Sobre
                </Link>
              </li>                    
              <li>
                <Link
                  activeClass="active"
                  to="experience"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                  Experiência
                </Link>
              </li>                    
              <li>
                <Link
                  activeClass="active"
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                  Formação
                </Link>
              </li>                    
              <li>
                <Link
                  activeClass="active"
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                  Serviços
                </Link>
              </li>                    
              <li>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                  Contato
                </Link>
              </li>                    
            </ul>

          </Col>   
          <Col>
            <Card  className="card-footer" text="white">
              <Card.Header as="h6" border="light">Pensamento</Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p className="quote">
                    {' '}
                    Não se deve ir atrás de objetivos fáceis,
                    é preciso buscar o que só pode ser alcançado por meio dos maiores esforços.
                    {' '}
                  </p>
                  <footer className="blockquote-footer">
                    Albert Einstein <cite title="Source Title"></cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>   
        </Row>
        <Row className="copyright-style">
          <p>&copy; 2020 Desenvolvido por Richard Machado </p>
        </Row>
      </Container>
    </Row>
  )
}

export default index
