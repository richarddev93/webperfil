import React, {useState} from 'react'
import Avatar from '../../assets/download.jpg'
import './styles.css'




export default function Index({title,id}) {

  function handleMessage (e){
    e.preventDefault();
    alert("Mensagem Enviada")

    const data = { name,
    email,
    subject,
    message};
   
    

  }
  const [name,setName]= useState('')
  const [email,setEmail]= useState('')
  const [subject,setSubject]= useState('')
  const [message,setMessage]= useState('')
   
  
  const subjects = [
    {
      value: '',
      label: 'Escolha um Assunto',
    },
    {
      value: 'orcamento',
      label: 'Orçamento',
    },
    {
      value: 'interview',
      label: 'Entrevista',
    },
    {
      value: 'project',
      label: 'Projeto',
    },
    {
      value: 'others',
      label: 'Outros',
    },
  ];

  
    return (
    <div className="container-contact" id ={id}>
            <h1>Me mande uma mensagem.</h1>
        <div className = "form">
            <form onSubmit={handleMessage}> 
                <div className="container-input">
                    <div className = "container-input-group"> 
                      <section >
                        <span >Nome</span>
                        <input  
                          value={name}
                          onChange={(e)=>{setName(e.target.value)}}
                         aria-describedby="emailHelp" placeholder="Digite o nome" />
                      </section>

                      <section >
                        <span >E-mail</span>
                        <input 
                          value={email}
                          onChange={(e)=>{setEmail(e.target.value)}}
                          type="email"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Entre com o e-mail" />
                      </section>

                      <section >
                        <span >Assunto</span>
                        <select 
                            value={subject}
                            onChange={(e)=>{setSubject  (e.target.value)}}
                         >
                          {subjects.map( (i) => (
                            <option value={i.value}>{i.label}</option>
                          ))}
                        </select>
                      </section>

                    </div>   

                      <section className="section-textarea">
                        <span >Mensagem</span>
                        <textarea 
                          value={message}
                          onChange={(e)=>{setMessage(e.target.value)}}
                          placeholder="Digite a mensagem"></textarea>                   
                      </section>          
                </div>                       
                <button className ="button" type="submit">Enviar</button>
            </form>
        </div>
    </div>


    )
}
