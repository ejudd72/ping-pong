import { connect } from "react-redux";
import Player from "./Player";
import { incrementP1 } from "../../data/actions"

const mapStateToProps = state => {
  return {
    score: state.player1,
    number: 1,
    serving: state.serve,
    winner: state.winner,
    defaultLang: state.defaultLang,
    playerName: state.player1Name,
    gameStarted: state.gameStarted
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleIncrement: () => dispatch(incrementP1()),
  }; 
};

  
export default connect(mapStateToProps, mapDispatchToProps)(Player);