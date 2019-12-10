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
  
export default connect(mapStateToProps)(Player);