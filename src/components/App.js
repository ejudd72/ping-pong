import React from "react";
import Player from "./Player";
import Header from "./Header"
import Result from "./Result";
import esperanto from "../esperanto";

// import PrevGames from "./PrevGames";

const App = ({ 
    player1, 
    player2, 
    handleIncrementP1, 
    handleIncrementP2, 
    handleReset, 
    handleClick, 
    serving, 
    winner, 
    previous, 
    defaultLang
}) => (

    <React.Fragment>
        <Header
            handleClick={ handleClick }
            defaultLang={ defaultLang }

        />
        <div className="row md-6" style={{ width: "100%", justifyContent: "space-evenly" }}>
            <Player
                style={{width: "50%"}}
                number={ 1 }
                score={ player1 }
                handleIncrement={ handleIncrementP1 } 
                serving={ serving }
                winner={ winner }
                defaultLang={ defaultLang }
            />

            <Player
                number={ 2 }
                score={ player2 }
                handleIncrement={ handleIncrementP2 } 
                serving={ serving }
                winner={ winner }
                defaultLang={ defaultLang }
            />
            </div>
            <hr/>
            <Result
                handleReset={ handleReset }
                player1={ player1 }
                player2={ player2 }
                winner={ winner }
                previous={ previous }
                defaultLang={ defaultLang }
            />

    </React.Fragment>
);

export default App;