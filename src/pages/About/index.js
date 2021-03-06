import React from 'react'
import './styles.css'
import Avatar from '../../assets/perfil.jpg'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function index({id}) {
    return (
    <Container fluid className="center-block container-about" id = {id}>
            <Col className="container-content">
                <Row>
                    <Col className="text-right">
                        <p className = "title">Richard Machado</p>
                        <p className = "subtitle">Desenvolvedor FullStack</p>
                    </Col>
                    <Col className="perfil">    
                        <img className = "rounded" src = {Avatar} alt = "" height="200px"/>
                    </Col>
                </Row>
                <Row className = "description">
                    <p >  
                        Atualmente sou responsável pela manutenção e implementação de novas funções para um sistema ERP usando a Linguagem Clipper e também para alguns aplicativos com JavaScript e React Native.
                    </p> 
                    <p>  
                    Concluí há um ano o curso de Sistemas de Informação e ainda busco na prática o meu desenvolvimento profissional na área de                    TI. 
                    </p> 
                    <p>  
                    Antes disso fui responsável por uma loja virtual porém o foco era na parte comercial mas ainda sim, com o conhecimento de tecnologia, consegui contribuir para a melhoria de alguns dos processos da loja, agregando algumas ferramentas a rotina.                    Fiz um curso Técnico em Informática na ETEC Heliópolis em 2013. Estou cursando inglês para aprimorar fala ,leitura e escrita mas consigo me desenvolver bem com o inglês técnico.
                    </p> 
                </Row>
           </Col> 
    </Container>
    )
}
