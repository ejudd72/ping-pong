import { connect } from "react-redux";
import Header from "./Header";
import { langToggle } from "../../data/actions"
import { english, esperanto } from "../../data/languages"


const mapStateToProps = state => {
  return {
    defaultLang: state.defaultLang ? english : esperanto,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleClick: () => dispatch(langToggle()),
  }; 
};

  
export default connect(mapStateToProps, mapDispatchToProps)(Header);