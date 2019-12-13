import { connect } from "react-redux";
import GameStart from "./GameStart";
import { postGame } from "../../data/actions/api"
import { english, esperanto } from "../../data/languages"


const mapStateToProps = state => {
    return {
        defaultLang: state.defaultLang ? english : esperanto,
        alternate: state.alternate,
        winScore: state.winScore,
        player1Name: state.player1Name,
        player2Name: state.player2Name,
        gameStarted: state.gameStarted,
        defaultLang: state.defaultLang,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleSave: settings => dispatch(postGame(settings))
    };
};
  

  
export default connect(mapStateToProps, mapDispatchToProps)(GameStart);