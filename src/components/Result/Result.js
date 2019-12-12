import React from "react";
import { Table } from "react-bootstrap";

const Result = ({ winner, handleReset, previous, defaultLang, player1Name, player2Name }) => (
    <>
        { winner > 0 ? 
        <h2 className="alert alert-success">
        { 
            (winner === 1 ? (player1Name ? player1Name : `${defaultLang.player} 1 ` ) :  (player2Name ? player2Name : `${defaultLang.player} 2 ` )) + ` ${defaultLang.wins}`
        }
       
        </h2>
        : null } 

        <hr/>

        <button className="btn btn-danger" onClick={ handleReset }>{ defaultLang.reset }</button>

        <hr/>
        <div className="card">

            <h2 style={{textAlign: "center"}}>{ defaultLang.history }</h2>
            <Table striped bordered hover style={{magin: 10}}>
                <thead>
                    <tr>
                        <th style={{textAlign: "center"}}>Game ID</th>
                        <th style={{textAlign: "center"}}>{ player1Name !== "" ? player1Name : `${defaultLang.player} 1`}</th>
                        <th style={{textAlign: "center"}}>{ player2Name !== "" ? player2Name : `${defaultLang.player} 2`}</th>
                    </tr>
                </thead>
                <tbody>
                { previous.map((current, index) =>  (
                
                    <tr key={index}>
                        <td>{ current.player_1.game_id }</td>
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