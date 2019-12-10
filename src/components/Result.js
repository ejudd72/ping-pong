import React from "react";
import { Table } from "react-bootstrap";
import { esperanto } from "../esperanto";

const Result = ({ winner, handleReset, previous, defaultLang }) => (
    <>
        { winner > 0 ? 
        <h2 className="alert alert-success">{ defaultLang ? `Player ${winner} wins!` : esperanto.player + " " +  winner  + " " + esperanto.wins }</h2>

        : null } 
         <button className="btn btn-danger" onClick={ handleReset }>{ defaultLang ? "Reset" : esperanto.reset }</button>

        <div className="card">
        <h2>{ defaultLang ? "History" : esperanto.history }</h2>

       <Table>
            <thead>
                <tr>
                    <th>{ defaultLang ? "Player 1" : esperanto.player + " 1"}</th>
                    <th>{ defaultLang ? "Player 2" : esperanto.player + " 2"}</th>
                </tr>
            </thead>
            <tbody>
            { previous.map((current, index) =>  (
            
                <tr key={index}>
                    <td style={{backgroundColor: current.player_1.won ? "green" : "red" }} >{ current.player_1.score }</td>
                    <td style={{backgroundColor: current.player_2.won ? "green" : "red" }} >{ current.player_2.score  }</td>
                </tr>
            ))}
            </tbody>
       </Table>
       </div>
    </>
);

export default Result;