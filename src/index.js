import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from "react-redux";
import store from "./data/store";
 
// let state = store.getState();

ReactDOM.render(
  <Provider store={ store }>
    <App 
      // handleIncrementP1={  () => store.dispatch({ type: "incrementP1" }) }
      handleIncrementP2={  () => store.dispatch({ type: "incrementP2" }) }
      handleReset={  () => store.dispatch({ type: "reset" }) }
      // handleClick={ }
    />,
  </Provider>,
document.getElementById("root")
); 

  
