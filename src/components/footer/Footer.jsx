import './footer.css';
import  email from '../../assets/email.png';
import insta from  '../../assets/Instagram_logo.png';
import tel from '../../assets/telephone-logo.png'
function Footer(){
    return(
        <div className='footer'>
            <img src={email} alt=""/>
            <p>sla123@gmail.com</p> 
            <img src={insta} alt=""/>
            <p>@umaoticaaí</p>
            <img src={tel} alt="" id='tel'/>
            <p>119123456</p>
        </div>
    )
}
export default Footer;