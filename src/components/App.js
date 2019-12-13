import React from "react";
import Player1 from "./Player/Player1";
import Player2 from "./Player/Player2";
// import { Router } from "react-router-dom";
import Header from "./Header"
import Result from "./Result";
import GameStart from "./GameStart";
import Loading from "./Loading";


const App = () => (
    <>
        <Header />
        <GameStart/>
        <Loading>
        <div className="row md-6" style={{ padding: 15 }}>
            <Player1/>
            <Player2/>
        </div>
        </Loading>
        <hr/>
        <Loading>
            <Result/>
        </Loading>
    </>
);

export default App;