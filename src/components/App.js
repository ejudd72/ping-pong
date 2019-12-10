import React from "react";
import Player1 from "./Player/Player1";
import Player2 from "./Player/Player2";

import Header from "./Header"
import Result from "./Result";

const App = ({ 
    handleIncrementP1, 
    handleIncrementP2, 
    handleReset, 
    handleClick, 
    defaultLang,
}) => (

    <React.Fragment>
        <Header
            handleClick={ handleClick }
            defaultLang={ defaultLang }
        />
        <div className="row md-6" style={{padding: 15}}>
            <Player1
                handleIncrement={ handleIncrementP1 } 
            />
            <Player2
                handleIncrement={ handleIncrementP2 } 
            />
            </div>
            <hr/>
            <Result
                handleReset={ handleReset }
            />

    </React.Fragment>
);

export default App;