import { connect } from "react-redux";
import Player from "./Player";

const mapStateToProps = state => {
  return {
    score: state.player2,
    number: 2,
    serving: state.serve,
    winner: state.winner,
    defaultLang: state.defaultLang
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleIncrement: () => dispatch({ type: "incrementP2" }),
  }; 
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Player);