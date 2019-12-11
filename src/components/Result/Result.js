import React from "react";
import { Table } from "react-bootstrap";
import { esperanto, english } from "../../data/languages";

const Result = ({ winner, handleReset, previous, defaultLang, player1Name, player2Name }) => (
    <>
        { winner > 0 ? 
        <h2 className="alert alert-success">
        { 
           !player1Name || !player2Name ? ( defaultLang ? `${english.player} ${winner} ${english.wins}` : `${esperanto.player} ${winner} ${esperanto.wins}` ) : 
           null 
        }
        {
            winner === 1 && player1Name ? (player1Name + " " + (defaultLang ? english.wins : esperanto.wins)) :
           winner === 2 && player2Name ? player2Name + " " + (defaultLang ? english.wins : esperanto.wins) : null
        }
        </h2>
        : null } 

        <hr/>

        <button className="btn btn-danger" onClick={ handleReset }>{ defaultLang ? english.reset : esperanto.reset }</button>

        <hr/>
        <div className="card">

            <h2 style={{textAlign: "center"}}>{ defaultLang ? english.history : esperanto.history }</h2>
            <Table style={{magin: 10}}>
                <thead>
                    <tr>
                        <th style={{textAlign: "center"}}>{ player1Name !== "" ? player1Name : (defaultLang ? english.player : esperanto.player) + " 1"}</th>
                        <th style={{textAlign: "center"}}>{ player2Name !== "" ? player2Name : (defaultLang ? english.player : esperanto.player) + " 2"}</th>
                    </tr>
                </thead>
                <tbody>
                { previous.map((current, index) =>  (
                
                    <tr key={index}>
                        <td style={{ backgroundColor: current.player_1.won ? "lightgreen" : "indianred" }} >{ current.player_1.score }</td>
                        <td style={{ backgroundColor: current.player_2.won ? "lightgreen" : "indianred" }} >{ current.player_2.score  }</td>
                    </tr>
                ))}
                </tbody>
        </Table>
       </div>
    </>
);

export default Result;