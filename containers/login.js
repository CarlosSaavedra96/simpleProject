import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginScreen from '../screens/LoginScreen';
import { loginFetch, loginInit } from '../actions/authActions';

const mapStateToProps = state => ({ auth: state.auth.toJS() });

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            loginFetch,
            loginInit,
        }, dispatch,
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
