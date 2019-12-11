import React from "react";
import { esperanto, english } from "../../data/languages"

const Player = ({ score, handleIncrement, serving, number, winner, defaultLang, playerName, gameStarted }) => (
    gameStarted ? (
    <div 
        className={"col-md-6 mt-4 card text-center " + (serving === number ? "bg-dark text-white" : null )}
    >
        <h5 className="card-header">
            { playerName !== "" ? playerName : `${defaultLang.player} ${number}`}
        </h5>
        <div className="card-body">
            <p className="card-text display-1">{ score }</p>
        </div>

        { winner !== 0 ? null : 
            <div className="card-footer">
                <button 
                    className="form-control btn btn-success" 
                    onClick={ handleIncrement }
                >+</button>
            </div> 
        }
    </div>
    ) : null
);

export default Player;