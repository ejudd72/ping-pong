import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { createStore, compose } from "redux";
import persistState from "redux-localstorage";

import initial from "./data/initial";
import reducer from "./data/reducer";
import store from "./data/store";

const render = () => {
    
    let state = store.getState();

    ReactDOM.render(
      <App 
        player1={ state.player1 } 
        player2={ state.player2 }
        handleIncrementP1={  () => store.dispatch({ type: "incrementP1" }) }
        handleIncrementP2={  () => store.dispatch({ type: "incrementP2" }) }
        handleReset={  () => store.dispatch({ type: "reset" }) }
        handleClick={  () => store.dispatch({ type: "langToggle" }) }
        serving={ state.serve }
        winner={ state.winner }
        previous={ state.previous }
        defaultLang={ state.defaultLang }
    />,
    document.getElementById("root")
  ); };

  store.subscribe(render); // render when state changes
  render(); // render when page loads using initial state

