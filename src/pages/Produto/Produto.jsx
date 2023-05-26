import Prods from "../../components/prods/prods";
import "./Produto.css";

import oculos2 from "../../assets/imgOculos2.png";
import oculos3 from "../../assets/imgOculos3.png";
import oculos4 from "../../assets/imgOculos4.png";

function Produto(){
    return (
        <div className="tudo">
            <div className="cima">
                <Prods img={oculos3}/>
                <Prods img={oculos2}/>
                <Prods img={oculos4}/>
                <Prods/>
                <Prods/>
                <Prods/>
                <Prods/>
                <Prods/>

            </div>
            <div className="baixo">
                <Prods img={oculos2}/>
                <Prods />
                <Prods img={oculos4}/>
                <Prods/>
                <Prods/>
                <Prods/>
                <Prods/>
                <Prods/>
            </div>
        </div>
    )
}
export default Produto;