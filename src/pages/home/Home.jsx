import "./home.css";
import emoji from '../../assets/emogi-oculos.png';
import Footer from "../../components/footer/Footer";
import Carousel from "react-material-ui-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 




function Home() {

    return (
        <>
        <div className="container-banner">
            <div className="bg-imag">
            </div>

             <div className="texto-banner">
                <p className="big">O estilo é ser</p>
                <p className="big-voce"><strong>VOCÊ</strong></p>
                <p className="texto-legenda"><strong>Liberte-se</strong> das limitações e aproveite a vida com clareza e conforto</p>
             </div>         
         </div>

         

         <div className="divisor"></div>

        <div className="tudo1">
        <div className="txtCar">
                
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eveniet modi nihil illo? Vero minima impedit ut ex molestiae facere hic voluptatum voluptas odit deleniti nemo, mollitia blanditiis repellendus obcaecati?Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, optio consequatur? Expedita fuga adipisci unde, voluptatem sed voluptatum maxime qui deleniti ratione optio pariatur reiciendis consequuntur maiores, nostrum quisquam corporis. 
            </p>
         
            <div className="imgs-mid">
               <Carousel className="carrosel">
                   <div className="abacaxi"></div>
                   <div className="garotinho"></div>
                   <div className="hamilton"></div>
               </Carousel> 
            </div>  
        </div>
        </div>
       
                  
  
        </>

        
    )
}

export default Home;