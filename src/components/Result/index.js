import { connect } from "react-redux";
import Result from "./Result";
import { reset } from "../../data/actions/state"
import { deleteGame, getPrevGames } from "../../data/actions/api"

import { english, esperanto } from "../../data/languages"

const mapStateToProps = state => {
  return {
    player1: state.player1,
    player1Name: state.player1Name,
    player2: state.player2,
    player2Name: state.player2Name,
    winner: state.winner,
    previous: state.previous,
    defaultLang: state.defaultLang ? english : esperanto,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleReset: () => dispatch(reset()),
    handleDelete: (gameId) => dispatch(deleteGame(gameId)),
    handleLoad: () => dispatch(getPrevGames()),
  }; 
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Result);