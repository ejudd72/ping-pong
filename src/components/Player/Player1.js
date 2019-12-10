import { connect } from "react-redux";
import Player from "./Player";

const mapStateToProps = state => {
  return {
    score: state.player1,
    number: 1,
    serving: state.serve,
    winner: state.winner,
    defaultLang: state.defaultLang
  };
};
  
export default connect(mapStateToProps)(Player);