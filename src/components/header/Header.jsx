import { Link } from "react-router-dom";
import "./index.css";
import Imglocal from "../../assets/img-local.png";
import ImgLogo from "../../assets/notre-logo.png";
import { useNavigate } from "react-router-dom";

function Header(){
  const navigate = useNavigate();
  const navigateLogo = useNavigate();

    return(
      
      <div className="cabecalho">
        <nav>
              <img src={ImgLogo} onClick={() => navigateLogo('/')} id="logo"/>
              <Link to="/">Home</Link>
              <Link to="/Produto">Produto</Link>
              <img src={Imglocal} onClick={() => navigate('/Sobre')} id="local" /> 
        </nav>
       </div>

    )
}

export default Header;

  /*import Menu from '@mui/material/Menu';
  import MenuItem from '@mui/material/MenuItem';
  import { useState } from "react";
  import { IconButton } from "@mui/material";
  import MenuIcon from '@mui/icons-material/Menu';
  import { useNavigate } from "react-router-dom";*/

  /* const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();

    const menuData = [
        {
            id:1,
            link: '/home',
            name: 'Home',
        },
        {
            id:2,
            link: '/sobre',
            name: 'Sobre',
        },
        {
            id:3,
            link: '/contato',
            name: 'Contato',
        }
    ] 

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = (link) => {
      navigate(link);
      setAnchorEl(null);
    };*/
  /* <div>
        <IconButton aria-label="delete"
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <MenuIcon/>
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
            {menuData.map(el => (
             <MenuItem key={el.id} onClick={() => handleClose(el.link)}>{el.name}</MenuItem>
            ))}
        </Menu>
      </div>*/