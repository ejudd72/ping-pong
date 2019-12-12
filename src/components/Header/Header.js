import React from "react";
import { Button } from "react-bootstrap";
import { english, esperanto } from "../../data/languages"


const Header = ({ handleClick, defaultLang, gameId }) => (
    <header className="jumbotron mt-4 mb-0">
        <h1>{ defaultLang.pingPong }</h1>
            <Button 
                style={{margin: "0 auto"}}
                variant={ defaultLang === english ? "danger" : "primary" }
                onClick={ handleClick }>English</Button>
            <Button 
                variant={ defaultLang === esperanto? "danger" : "primary" }
                onClick={ handleClick }
            >Esperanto</Button>
            <p>Game: { gameId } </p>
    </header>
);

export default Header;