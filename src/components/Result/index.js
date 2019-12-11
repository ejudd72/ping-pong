import { connect } from "react-redux";
import Result from "./Result";
import { reset } from "../../data/actions"

const mapStateToProps = state => {
  return {
    player1: state.player1,
    player1Name: state.player1Name,
    player2: state.player2,
    player2Name: state.player2Name,
    winner: state.winner,
    previous: state.previous,
    defaultLang: state.defaultLang
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleReset: () => dispatch(reset()),
  }; 
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Result);