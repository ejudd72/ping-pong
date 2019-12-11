import { connect } from "react-redux";
import GameStart from "./GameStart";
import { saveSettings } from "../../data/actions"


const mapStateToProps = state => {
    return {
        defaultLang: state.defaultLang,
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