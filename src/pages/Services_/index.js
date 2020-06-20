import React from 'react'
import webdev from '../../assets/web-dev.png'
import logoweb from '../../assets/logo-web.png'
import logoreact from '../../assets/logo-react.png'
import logocart from '../../assets/logo-cart.png'
import logodjango from '../../assets/logo-django.png'
import logopython from '../../assets/logo-python.png'
import logorn from '../../assets/logo-react.png'
import mobdev from '../../assets/mob-dev.png'

import './styles.css'

export default function index({id}) {
    return (
        <div className ="container-service" id ={id}>
            <h1>Serviços</h1>
            <div className ="container-detail-service">
                <section>
                    <h3>Criação de Websites</h3>
                    <div className="container-service-img">
                        <img src={webdev} alt="logoweb" width='320' height='280'/>
                    </div>
                    <p>Desenvolvimento de sites personalizados</p>
                    <div className="container-detail-service-tecnologies">
                        <img src={logoweb} alt="Linguagens Web " width='40px'height='40px'/>
                        <img src={logoreact} alt="framework web "width='40px'height='40px'/>
                    </div>
                </section> 

                 <section>
                    <h3>Criação de Aplicativos</h3>
                    <div className="container-service-img">
                        <img src={mobdev} alt="logoweb" width='320' height='280'/>
                    </div>
                    <p>Desenvolvimento de aplicações mobile para ios e android</p>
                    <div className="container-detail-service-tecnologies">
                        <img src={logorn} alt="framework web "width='40px'height='40px'/>
                    </div>
                </section> 
                <section>
                    <h3>E-commerce</h3>
                    <div className="container-service-img">
                        <img src={logocart} alt="logoweb" width='320' height='280'/>
                    </div>
                    <p>Integração de plataformas de E-commerce com Marketplace</p>
                    <div className="container-detail-service-tecnologies">
                    </div>
                </section>  

            </div>    
            
        </div>
    )
}
