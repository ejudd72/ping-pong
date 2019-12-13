import { connect } from "react-redux";
import Loading from "./Loading";
import { getPrevGames } from "../../data/actions/api"

const mapStateToProps = ({ loaded }) => ({
    loaded,
});

const mapDispatchToProps = (dispatch) => ({
    handleLoad: () => dispatch(getPrevGames()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Loading);