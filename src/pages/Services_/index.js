import React from 'react'


export default function index({id}) {
    return (
        <div className ="container-services" id ={id}>
            <div className="container-title">
                <h1>Serviços</h1>
            </div>
            <div classname ="container-detail-service">
                <div className="container-service-item">
                    <div className = "container-img">
                        IMAGEM
                    </div>
                    <div className= "container-desc-services">
                        Criação de apps através de 
                    </div>
                </div>

                <div className="container-service-item">
                    <div className = "container-img">
                        IMAGEM2
                    </div>
                    <div className= "container-desc-services">
                        Criação de apps2 através de 
                    </div>
                </div>

            </div>    
            <div className = "container-tecnologias">
                Imagens de logos
            </div>
            
        </div>
    )
}
