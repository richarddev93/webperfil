import React from 'react'


export default function index({id}) {
    return (
        <div className ="container-education" id ={id}>
            <div className="container-title">
                <h2>Formação</h2>
            </div>
            <div>
                <div>
                    <p> - Sistemas de Informação</p>
                    <p>2014-2019</p>
                </div>
                <p>Universidade Nove de Julho</p>
            </div>
            <div>
                <div>
                    <p> - Técnico em Infomática</p>
                    <p>2014-2019</p>
                </div>
                <p>Etec Heliópolis</p>
            </div>
        </div>
    )
}
