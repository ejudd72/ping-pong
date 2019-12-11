import { connect } from "react-redux";
import GameStart from "./GameStart";
import { saveSettings } from "../../data/actions"
import { english, esperanto } from "../../data/languages"


const mapStateToProps = state => {
    return {
        defaultLang: state.defaultLang ? english : esperanto,
        alternate: state.alternate,
        winScore: state.winScore,
        player1Name: state.player1Name,
        player2Name: state.player2Name,
        gameStarted: state.gameStarted
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleSave: settings => dispatch(saveSettings(settings)),
    };
};
  

  
export default connect(mapStateToProps, mapDispatchToProps)(GameStart);