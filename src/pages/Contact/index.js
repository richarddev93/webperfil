import React from 'react'
import Avatar from '../../assets/download.jpg'
import './styles.css'
import TextField from '@material-ui/core/TextField';
import { withStyles,makeStyles } from '@material-ui/core/styles';

const CssTextField = withStyles({
    root: {
      "& label.Mui-focused": {
        color: "blue"
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "green"
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "red"
        },
        "&:hover fieldset": {
          borderColor: "yellow"
        },
        "&.Mui-focused fieldset": {
          borderColor: "brown"
        }
      }
    }
  })(TextField);

  const style = {

  }
  


export default function index({title,id}) {

    return (
    <div className="container-contact" id ={id}>
            <h1>Me mande uma mensagem.</h1>
        <div className = "form">
            <form> 
                <div className="container-input">
                    <div className = "container-input-group">
                        <TextField  color ='#44475A'id="outlined-nome" label="Nome" variant="outlined" />        
                        <TextField id="outlined-basic" label="E-mail" variant="outlined" />                              
                        <select className="input" id="exampleFormControlSelect1">
                            <option>Orçamento</option>
                            <option>Recrutamento</option>
                            <option>Outros</option>                                                       
                        </select>  

                    </div>                     
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>                   
                </div>                       
                <button className ="button" type="submit">Enviar</button>
            </form>
        </div>
    </div>


    )
}
