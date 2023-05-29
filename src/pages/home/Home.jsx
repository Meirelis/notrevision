import "./home.css";

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
            <div className="emogi-malandro"></div>
            <div className="emogi-feliz "></div>
         </div>

         <div className="container-mid">
            <div className="carrossel"></div>
            
            <div className="apresentacao">
                <p>Bem-vindo ao nosso site de ótica! Aqui você irá descobrir os serviços e produtos que oferecemos.
                Nossa equipe de especialistas em ótica está comprometida em fornecer a você uma experiência visual de alta qualidade, garantindo que suas necessidades sejam atendidas da melhor forma possível.
                Nossos serviços abrangem desde exames de visão abrangentes até a seleção e adaptação de lentes de contato e óculos. Com equipamentos modernos e uma abordagem personalizada, nossa equipe está  pronta para ajudá-lo a alcançar a melhor experiência visual e o conforto visual ideal.</p>
            </div>
         </div>
        </>

        
    )
}

export default Home;