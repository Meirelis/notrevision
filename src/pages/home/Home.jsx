import "./home.css";
import emoji from '../../assets/emogi-oculos.png';
import Footer from "../../components/footer/Footer";
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

         <div className="imgs-mid">
            <img src={emoji} alt="emoji"/>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis minus corporis nemo hic. Eius veniam qui perspiciatis fuga ullam dolorum hic eum quis, dignissimos possimus saepe aliquid quibusdam, fugit dolores!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis minus corporis nemo hic. Eius veniam qui perspiciatis fuga ullam dolorum hic eum quis, dignissimos possimus saepe aliquid quibusdam, fugit dolores!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis minus corporis nemo hic. Eius veniam qui perspiciatis fuga ullam dolorum hic eum quis, dignissimos possimus saepe aliquid quibusdam, fugit dolores!
            </p>
         </div>


      
        </>

        
    )
}

export default Home;