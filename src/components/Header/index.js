import { connect } from "react-redux";
import Header from "./Header";

const mapStateToProps = state => {
  return {
    defaultLang: state.defaultLang
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleClick: () => dispatch({ type: "langToggle" }),
  }; 
};

  
export default connect(mapStateToProps, mapDispatchToProps)(Header);