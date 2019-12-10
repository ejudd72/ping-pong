import React from "react";
import { Button } from "react-bootstrap";

const Header = ({ handleClick, defaultLang }) => (
    
        <header className="jumbotron mt-4 mb-0">
            <h1>PongPing</h1>
            <Button 
                variant={ defaultLang ? "danger" : "primary" }
                onClick={ handleClick }>English</Button>
            <Button 
                variant={ !defaultLang ? "danger" : "primary" }
                onClick={ handleClick }
            >Esperanto</Button>

        </header>

);

export default Header;