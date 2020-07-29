import React from 'react';
import Logo from '../../assets/img/logo_flix.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="EuQueFlix Logo"/>
            </a>
            <Button  href="/" > Novo Vídeo </Button>
          </nav>        
    );
}

export default Menu;