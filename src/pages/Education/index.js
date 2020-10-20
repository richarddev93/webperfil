import React from 'react'
import './styles.css'


export default function index({id}) {
    return (
        <div className ="container-education" id ={id}>
            <h1>Formação</h1>
        <div className="container-detail-education">
            <section>
                <div className="title-group">
                    <h2> - Sistemas de Informação</h2>
                    <p> • Nível Superior</p>
                </div>
                <div className="title-group">

                    <h4>Universidade Nove de Julho</h4>
                    <p>2014-2019</p>
                </div>
            </section>
            <section>
                <div className="title-group">
                    <h2> - Técnico em Informática</h2>
                    <p> • Nível Técnico</p>
                </div>
                <div className="title-group">
                    <h4>ETEC Heliópolis</h4>
                    <p>2012-2013</p>
                </div>
            </section>

            </div>
        </div>
    )
}
