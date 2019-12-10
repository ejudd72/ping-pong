import React from "react";
import { Table } from "react-bootstrap";
import { esperanto, english } from "../languages";

const Result = ({ winner, handleReset, previous, defaultLang }) => (
    <>
        { winner > 0 ? 
        <h2 className="alert alert-success">{ defaultLang ? english.player + " " +  winner  + " " + english.wins : esperanto.player + " " +  winner  + " " + esperanto.wins }</h2>
        : null } 

        <hr/>

        <button className="btn btn-danger" onClick={ handleReset }>{ defaultLang ? english.reset : esperanto.reset }</button>

        <hr/>
        <div className="card">

            <h2 style={{textAlign: "center"}}>{ defaultLang ? english.history : esperanto.history }</h2>
            <Table style={{magin: 10}}>
                <thead>
                    <tr>
                        <th style={{textAlign: "center"}}>{ (defaultLang ? english.player : esperanto.player) + " 1"}</th>
                        <th style={{textAlign: "center"}}>{ (defaultLang ? english.player : esperanto.player) + " 2"}</th>
                    </tr>
                </thead>
                <tbody>
                { previous.map((current, index) =>  (
                
                    <tr key={index}>
                        <td style={{textAlign: "center", backgroundColor: current.player_1.won ? "lightgreen" : "indianred" }} >{ current.player_1.score }</td>
                        <td style={{textAlign: "center", backgroundColor: current.player_2.won ? "lightgreen" : "indianred" }} >{ current.player_2.score  }</td>
                    </tr>
                ))}
                </tbody>
        </Table>
       </div>
    </>
);

export default Result;