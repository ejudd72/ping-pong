import { connect } from "react-redux";
import Header from "./Header";

const mapStateToProps = state => {
  return {
    defaultLang: state.defaultLang
  };
};
  
export default connect(mapStateToProps)(Header);