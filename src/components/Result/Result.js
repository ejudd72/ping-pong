import React from "react";
import { Table } from "react-bootstrap";

const Result = ({ winner, handleReset, previous, defaultLang, player1Name, player2Name, handleDelete, handleLoad }) => (
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

        <button className="btn btn-primary" onClick={ handleLoad }> Reload History</button>


        <hr/>
        <div className="card">

            <h2 style={{textAlign: "center"}}>{ defaultLang.history }</h2>
            <Table striped bordered hover style={{magin: 10}}>
                <thead>
                    <tr>
                        <th style={{textAlign: "center"}}>{ player1Name !== "" ? player1Name : `${defaultLang.player} 1`}</th>
                        <th style={{textAlign: "center"}}>{ player2Name !== "" ? player2Name : `${defaultLang.player} 2`}</th>
                    </tr>
                </thead>
                <tbody>
                { previous.map((current, index) =>  (
                <>
                    <tr style={{backgroundColor: "black", color: "white"}} key={index}>
                        
                        <td>{ current.player1Name }</td>
                        <td>{ current.player2Name }</td>
                        <td>Delete game</td>
                    </tr>
                    <tr key={ current.id }>
                      
                        <td style={{ backgroundColor: current.winner === 1 ? "lightgreen" : "indianred" }} >{ current.player1 }</td>
                        <td style={{ backgroundColor: current.winner === 2 ? "lightgreen" : "indianred" }} >{ current.player2 }</td>
                        <td>
                            <img 
                                id={ current.id }
                                src="./delete.svg" 
                                alt="delete icon"
                                onClick={() => handleDelete(current.gameId)}
                            />
                        </td>
                    </tr>
                    </>
                ))}
                </tbody>
        </Table>
       </div>
    </>
);

export default Result;