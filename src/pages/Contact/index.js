import React, {useState} from 'react'
import { GrLinkedin,GrGithub } from "react-icons/gr";
import api from '../../services/api'

import './styles.css'




export default function Index({title,id}) {

  async function handleMessage (e){
    e.preventDefault();
    alert("Mensagem Enviada")

    const data = { name,
    email,
    subject,
    message};

    try {
      const response = await api.post('api2/send',data);

      if(response.data.send === "success"){
        alert("Mensagem enviada com sucesso !");
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');

      }else {
        alert("Erro ao enviar a mensagem,tente novamente !");
        console.log(response);
      }
      
    } catch (error) {
      alert("Erro ao enviar a mensagem,tente novamente !");
      console.log(error);
    }
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
            <h1>Fale Comigo.</h1>

        <section >
          <span>
            <h4>Telefone :</h4> <p> 11 98174-3885</p>
          </span>
          <span>
            <h4>E-mail   :</h4> <p> richardmachado.93@gmail.com </p>
          </span>

          <div className="container-contact-social-media">
            <a href="https://www.linkedin.com/in/richard-machado-dev/" style={{marginRight :"10px"}}alt="Linkedin"><GrLinkedin color= {'#50FA7B'} size={45}/></a>
            <a href="https://github.com/richarddev93"><GrGithub  color={'#50FA7B'}size={45}/></a>
          </div>
        </section>

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
