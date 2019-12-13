import { connect } from "react-redux";
import Header from "./Header";
import { langToggle, chooseGame } from "../../data/actions/state"
import { checkUnfinished } from "../../data/actions/api"
import { english, esperanto } from "../../data/languages"

const mapStateToProps = state => {
  return {
    defaultLang: state.defaultLang ? english : esperanto,
    gameId: state.gameId,
    checkedUnfinished: state.checkedUnfinished,
    unfinished: state.unfinished,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleClick: () => dispatch(langToggle()),
    handleCheckUnfinished: () => dispatch(checkUnfinished()),
    handleChooseGame: (game) => dispatch(chooseGame(game)),

  }; 
};

  
export default connect(mapStateToProps, mapDispatchToProps)(Header);