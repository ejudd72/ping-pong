import { connect } from "react-redux";
import Player from "./Player";
import { incrementP2 } from "../../data/actions"


const mapStateToProps = state => {
  return {
    score: state.player2,
    number: 2,
    serving: state.serve,
    winner: state.winner,
    defaultLang: state.defaultLang,
    playerName: state.player2Name,
    gameStarted: state.gameStarted
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleIncrement: () => dispatch(incrementP2()),
  }; 
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Player);