import React from 'react'
import './styles.css'
import Avatar from '../../assets/download.jpg'

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
                        <img className = "rounded" src = {Avatar} alt = ""/>
                    </div>
            </div>
            
            <div className="descriptionContainer">
                <p className = "description">           
                Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores não altera o pão duris. Manduma pindureta quium dia nois paga. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.
                Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Casamentiss faiz malandris se pirulitá. In elementis mé pra quem é amistosis quis leo. Não sou faixa preta cumpadi, sou preto inteiris, inteiris.
                </p> 
            </div>
    </div>


    )
}
