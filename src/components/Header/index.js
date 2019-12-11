import { connect } from "react-redux";
import Header from "./Header";
import { langToggle } from "../../data/actions"


const mapStateToProps = state => {
  return {
    defaultLang: state.defaultLang
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleClick: () => dispatch(langToggle()),
  }; 
};

  
export default connect(mapStateToProps, mapDispatchToProps)(Header);