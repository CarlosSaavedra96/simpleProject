import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RegisterScreen from '../screens/RegisterScreen';
import { signinFetch, signinInit } from '../actions/authActions';

const mapStateToProps = state => ({ auth: state.auth.toJS() });

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            signinFetch,
            signinInit,
        }, dispatch,
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
