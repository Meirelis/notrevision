import Prods from "../../components/prods/Prods";
import './sobre.css'
function Sobre(){

    return(
        <div className="tudolocal">
            <h1>Aqui voce encontrará a localização das nossas lojas</h1>
            <div className="mapas">

                <div className="mapa1">
                    

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.6265075893916!2d-46.706342123702214!3d-23.65354316498716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce51e69bf653f9%3A0x6bd96a10f478989f!2s%C3%93tica%20Notre%20Vision%20Santo%20Amaro!5e0!3m2!1spt-BR!2sbr!4v1685146126457!5m2!1spt-BR!2sbr" frameborder="1"></iframe>
                    <h2>Santo Amaro,São Paulo</h2>    
                </div>
                <div className="mapa1">
                
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.9914379423735!2d-46.78161222370547!3d-23.532810360545874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceff0fa6b05fe3%3A0xf9006b3e63ea16a8!2s%C3%93tica%20Notre%20Vision%20Osasco!5e0!3m2!1spt-BR!2sbr!4v1685146400441!5m2!1spt-BR!2sbr" frameborder="1" ></iframe>
                <h2>Osasco,São Paulo</h2>
                </div>
               
            </div>
        </div>
        

            
       
    )
}

export default Sobre;