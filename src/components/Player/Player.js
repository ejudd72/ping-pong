import React from "react";
import { esperanto, english } from "../../languages"

const Player = ({ score, handleIncrement, serving, number, winner, defaultLang }) => (
    <>
        <div className={"col-md-6 mt-4 card text-center " + (serving === number ? "bg-dark text-white" : null )}>
            <h5 className="card-header">{ (defaultLang ? english.player : esperanto.player) + " " +  number }</h5>
            <div className="card-body">
                <p className="card-text display-1">{ score }</p>
            </div>

            { winner !== 0 ? null : 
                <div className="card-footer">
                    <button className="form-control btn btn-success" onClick={ handleIncrement }>+</button>
                </div> 
            }
        </div>
    </>
);

export default Player;