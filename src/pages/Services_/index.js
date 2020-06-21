import React from 'react'
import logoweb from '../../assets/logo-web.png'
import logoreact from '../../assets/logo-react.png'
import logodjango from '../../assets/logo-django.png'
import logopython from '../../assets/logo-python.png'
import logorn from '../../assets/logo-rn.png'

import './styles.css'

export default function index({id}) {
    return (
        <div className ="container-service" id ={id}>
            <h1>Serviços</h1>
            <div className ="container-detail-service">
                <div className = "div">
                    <h3>Criação de Websites</h3>
                    <div className="container-service-img">
                    </div>
                    <p>Desenvolvimento de sites personalizados</p>
                    <div className="container-detail-service-tecnologies">
                    <img src={logoweb} alt="Linguagens Web" width = "272px" height = "136px"/>
                    <img src={logoreact} alt="framework web "width ="275px" height = "154px"/>
                    </div>
                </div> 

                 <div className = "div">
                    <h3>Criação de Aplicativos</h3>
                    <div className="container-service-img-1">
                    </div>
                    <p>Desenvolvimento de aplicações mobile para ios e android</p>
                    <div className="container-detail-service-tecnologies">
                        <img src={logorn} alt="framework web " width="125px" height="145px" />
                    </div>
                </div> 
                <div className = "div">
                    <h3>E-commerce</h3>
                    <div className="container-service-img-2">
                    </div>
                    <p>Integração de plataformas de E-commerce com Marketplace</p>
                    <div className="container-detail-service-tecnologies">
                    </div>
                </div>  

            </div>    
            <div className="container-framework">
                {/* <div className="container-detail-service-tecnologies-framework"> */}
                    <img src={logodjango} alt="framework web " width="313" height="134px" />
                {/* </div> */}
                {/* <div className="container-detail-service-tecnologies-framework"> */}
                    <img src={logopython} alt="framework web " width="341px" height="143px" />
                {/* </div> */}
            </div>
        </div>
    )
}
