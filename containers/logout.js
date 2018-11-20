import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../components/Header';
import { logoutFetch } from '../actions/authActions';

const mapStateToProps = state => ({ auth: state.auth.toJS() });

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            logoutFetch,
        }, dispatch,
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
