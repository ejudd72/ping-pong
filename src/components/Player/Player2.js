import { connect } from "react-redux";
import Player from "./Player";
import { patchIncrementPlayer } from "../../data/actions/api"
import { english, esperanto } from "../../data/languages"

const mapStateToProps = ({ player2, serve, winner, player2Name, gameStarted, defaultLang }) => {
  return {
    score: player2,
    number: 2,
    serving: serve,
    winner,
    defaultLang: defaultLang ? english : esperanto,
    playerName: player2Name,
    gameStarted,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleIncrement: () => dispatch(patchIncrementPlayer(2)),
  };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Player);