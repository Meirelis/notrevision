import './Prods.css';

import oculos1 from "../../assets/imgOculos1.png";

function Prods(props){
    return (
      <div className='prods'>
      
        <img src={props.img ? props.img : oculos1} alt="" />
        <p className='p1'>R$150,00</p>
        <p className='p2'>10X sem juros</p>
     
      </div>
    )
}

export default Prods;