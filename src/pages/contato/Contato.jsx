import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './contato.css'

function Contato(){
  
    return(
        <>
       <div>
        <h1>Formulário</h1>
        
        </div>
        <form>
            <TextField id="nome" label="Nome" variant="standard" /> <br></br>
            <TextField id="email" label="E-mail" variant="standard" /> <br></br>
            <TextField id="Telefone" label="Telefone" variant="standard" /><br></br>

        </form>
        
        <br></br> <Button variant="contained" size="small">Enviar</Button>
        </>
       
      )  
}

export default Contato