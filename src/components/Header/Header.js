import React from "react";
import { Button, Table } from "react-bootstrap";
import { english, esperanto } from "../../data/languages";

const Header = ({ handleClick, defaultLang, handleCheckUnfinished, checkedUnfinished, unfinished, handleChooseGame }) => (
    <header className="jumbotron mt-4 mb-0">
        <h1>{ defaultLang.pingPong }</h1>
        <Button
            onClick={ handleCheckUnfinished }
        >Check for unfinished games?</Button>
        <Table>
            <tbody>
            { !checkedUnfinished ? null : 
                unfinished.map(game => {
                    return (
                    <>
                    <tr key="index">
                        <td onClick={ () => handleChooseGame(game) } style={{ backgroundColor: "black", color: "white" }}> Game { game.gameId }<strong>
                        
                        </strong>
                        </td>
                        <td style={{ backgroundColor: "black", color: "white" }}><strong>Winning Score: { game.winScore }</strong></td>
                    </tr>
                    <tr>
                        <td>{ game.player1Name }</td> 
                        <td>{ game.player2Name }</td>
                    </tr>
                     <tr>
                        <td>{ game.player1 }</td> 
                        <td>{ game.player2 }</td>
                    </tr>
                    </>
                )})
            }
            </tbody>
        </Table>
            <Button 
                style={{margin: "0 auto"}}
                variant={ defaultLang === english ? "danger" : "primary" }
                onClick={ handleClick }>English</Button>
            <Button 
                variant={ defaultLang === esperanto? "danger" : "primary" }
                onClick={ handleClick }
            >Esperanto</Button>
    </header>
);

export default Header;