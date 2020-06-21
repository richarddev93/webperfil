import React from 'react'
import './styles.css'
import Avatar from '../../assets/perfil.jpg'

export default function index({title,id}) {
    return (
    <div className="container-about" id = {id}>
            <div className = "container-perfil">
                <div className="textDiv">
                    <p className = "title">Richard Machado</p>
                    <p className = "subtitle">Desenvolvedor FullStack</p>
                    <p className = "subtitle">27 anos</p>
                </div>
                <div className="imgContainer">    
                    <img className = "rounded" src = {Avatar} alt = "" height="200px"/>
                </div>
            </div>
            
            <div className="descriptionContainer">
                <p className = "description">  
                Atualmente sou responsável pela manutenção e implementação de novas funções para um sistema ERP usando a Linguagem Clipper e também para alguns aplicativos com JavaScript e React Native. Concluí há um ano o curso de Sistemas de Informação e ainda busco na prática o meu desenvolvimento profissional na área de
TI. Antes disso fui responsável por uma loja virtual porém o foco era na parte comercial mas ainda sim, com o conhecimento de tecnologia, consegui contribuir para a melhoria de alguns dos processos da loja, agregando algumas ferramentas a rotina.
Fiz um curso Técnico em Informática na ETEC Heliópolis em 2013. Estou cursando inglês para aprimorar fala ,leitura e escrita mas consigo me desenvolver bem com o inglês técnico.         
                </p> 
            </div>
    </div>


    )
}
