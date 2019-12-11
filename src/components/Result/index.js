import { connect } from "react-redux";
import Result from "./Result";

const mapStateToProps = state => {
  return {
    player1: state.player1,
    player2: state.player2,
    winner: state.winner,
    previous: state.previous,
    defaultLang: state.defaultLang
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleReset: () => dispatch({ type: "reset" }),
  }; 
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Result);