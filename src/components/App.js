import React from "react";
import Player1 from "./Player/Player1";
import Player2 from "./Player/Player2";

import Header from "./Header"
import Result from "./Result";
import GameStart from "./GameStart";

const App = () => (
    <>
        <Header />
        <GameStart/>
        <div className="row md-6" style={{ padding: 15 }}>
            <Player1/>
            <Player2/>
        </div>
        <hr/>
        <Result/>
    </>
);

export default App;