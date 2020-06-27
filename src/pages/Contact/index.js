import React, {useState} from 'react'
import { GrLinkedin,GrGithub,} from "react-icons/gr";
import { RiMailSendLine } from "react-icons/ri";
import Form from 'react-bootstrap/Form'

import Toast from 'react-bootstrap/Toast'
import api from '../../services/api'

import './styles.css'

export default function Index({title,id}) {

  const [showA, setShowA] = useState(false);

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

  async function handleMessage (e){
    e.preventDefault();

    const data = { name,
    email,
    subject,
    message};

    try {
      const response = await api.post('api2/send',data);

      if(response.data.send === "success"){
        setShowA(true)
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
  
  return (
     <div className="container-contact" id ={id}>
        <div>
            <h1>Fale Comigo</h1>
            {showA ?
              <Toast 
                onClose={() => setShowA(false)} 
                show={showA} 
                delay={3000} 
                autohide
                style={{
                  position:"absolute",
                  right:5,
                  display:'flex',
                  flexDirection:'column',
                  padding:8,
                  width:250,
                  color:'#ffffff',
                  border:'1px solid  #50fa7b',
                  borderRadius:5,
                  boxShadow : '0 1px 3px 0 #ffffff'
                }} 
                >
                <Toast.Header className="toast-style-header">
                  <RiMailSendLine style={{'marginRight':'10'}}/>
                  <strong className="mr-auto">Mensagem</strong>
                  <small>agora ...</small>
                </Toast.Header>
                <Toast.Body className="toast-style-body">Enviada com Sucesso !</Toast.Body>
              </Toast>:null }
        </div>    
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

        
        <Form className = "form">
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
        </Form>
    </div>
  )
}
