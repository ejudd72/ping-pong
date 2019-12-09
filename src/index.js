import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, compose } from "redux";
import persistState from "redux-localstorage";

const initial = {
    player1: 0,
    player2: 0,
    serve: 0,
    winner: 0,
    previous: []
};

const reducer = (state, action) => {

    const serving = state => {
        let alt = state.player1 < 21 || state.player2 < 21 ? 5 : 2;

        return {
            ...state, 
            serve: Math.floor((state.player1 + state.player2 + 1) / alt) % 2 + 1
        }
    }

    const winner = state => {
        if ((state.player1 >= 21 || state.player2 >= 21) && (Math.abs(state.player1 - state.player2) >= 2)) {
            console.log(state.previous); 
            return {
                ...state, 
                winner: state.player1 > state.player2 ? 1 : 2,
            }
        } else {
            return {
                ...state,
                winner: 0,
            }
        }
    }
 
   switch (action.type) {
    case "incrementP1": return winner(serving({ ...state, 
        player1: state.player1 + 1, 
    })); 
    case "incrementP2": return winner(serving({ ...state, 
        player2: state.player2 + 1, 
    }));
    case "reset": 
    
    return { ...initial, previous: [...state.previous, state] };

    default: return state;
 } };

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initial,
    composeEnhancers(persistState())
);

const render = () => {
    let state = store.getState();

 // pass in state.value as a value prop
    ReactDOM.render(
      <App 
        player1={ state.player1 } 
        player2={ state.player2 }
        handleIncrementP1={  () => store.dispatch({ type: "incrementP1" }) }
        handleIncrementP2={  () => store.dispatch({ type: "incrementP2" }) }
        handleReset={  () => store.dispatch({ type: "reset" })  }
        serving={ state.serve }
        winner={ state.winner }
        previous={ state.previous }
    />,

      document.getElementById("root")
  ); };

  store.subscribe(render); // render when state changes
  render(); // render when page loads using initial state

