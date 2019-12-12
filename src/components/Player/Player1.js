import { connect } from "react-redux";
import Player from "./Player";
import { patchIncrementPlayer } from "../../data/actions/api"
import { english, esperanto } from "../../data/languages"

const mapStateToProps = state => {
  return {
    score: state.player1,
    number: 1,
    serving: state.serve,
    winner: state.winner,
    defaultLang: state.defaultLang ?english : esperanto,
    playerName: state.player1Name,
    gameStarted: state.gameStarted
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleIncrement: () => dispatch(patchIncrementPlayer(1)),
  }; 
};

  
export default connect(mapStateToProps, mapDispatchToProps)(Player);