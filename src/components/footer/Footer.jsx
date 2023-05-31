import './footer.css';
import  email from '../../assets/email.png';
import insta from  '../../assets/Instagram_logo.png';
import tel from '../../assets/telephone-logo.png'
function Footer(){
    return(
        <div className='footer'>
            <img src={email} alt=""/>
            <p>notrevision@gmail.com</p> 
            <img src={insta} alt=""/>
            <p>@oticanotrevision</p>
            <img src={tel} alt="" id='tel'/>
            <p>+55 11962795360</p>
        </div>
    )
}
export default Footer;