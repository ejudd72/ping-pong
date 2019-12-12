import { connect } from "react-redux";
import Header from "./Header";
import { langToggle } from "../../data/actions/state"
import { english, esperanto } from "../../data/languages"


const mapStateToProps = state => {
  return {
    defaultLang: state.defaultLang ? english : esperanto,
    gameId: state.gameId,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleClick: () => dispatch(langToggle()),
  }; 
};

  
export default connect(mapStateToProps, mapDispatchToProps)(Header);