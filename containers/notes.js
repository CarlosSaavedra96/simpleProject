import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FormScreen from '../screens/FormScreen';
import { createNote } from '../actions/notesActions';

const mapStateToProps = state => ({ notes: state.notes.toJS() });

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            createNote
        }, dispatch,
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(FormScreen);
