import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './contato.css'

function Contato(){
  
    return(
        <>
       <div className='tudo'>
        <h1>Entre em contato conosco</h1>
       
        <div className='sla'>
        <form>
            <TextField id="nome" label="Nome" variant="standard" /> <br></br><br></br>
            <TextField id="email" label="E-mail" variant="standard" /> <br></br><br></br>
            <TextField id="Telefone" label="Telefone" variant="standard" /><br></br>

        </form>
        
        <br/><br/> <Button variant="contained" size="small">Enviar</Button></div> 
        </div>
        </>
       
      )  
}

export default Contato