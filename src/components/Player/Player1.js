import { connect } from "react-redux";
import Player from "./Player";
import { patchIncrementPlayer } from "../../data/actions/api"
import { english, esperanto } from "../../data/languages"

const mapStateToProps = ({ player1, serve, winner, player1Name, gameStarted, defaultLang }) => {
  return {
    score: player1,
    number: 1,
    serving: serve,
    winner,
    defaultLang: defaultLang ? english : esperanto,
    playerName: player1Name,
    gameStarted,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleIncrement: () => dispatch(patchIncrementPlayer(1)),
  }; 
};

  
export default connect(mapStateToProps, mapDispatchToProps)(Player);