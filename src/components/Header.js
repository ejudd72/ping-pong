import React from "react";
import { Button } from "react-bootstrap";

const Header = ({ handleClick, defaultLang }) => (
    <header className="jumbotron mt-4 mb-0">
        <h1 style={{textAlign: "center"}}>{ defaultLang ? "PingPong" : "PongPing" }</h1>
            <Button 
                style={{margin: "0 auto"}}
                variant={ defaultLang ? "danger" : "primary" }
                onClick={ handleClick }>English</Button>
            <Button 
                variant={ !defaultLang ? "danger" : "primary" }
                onClick={ handleClick }
            >Esperanto</Button>
    </header>
);

export default Header;