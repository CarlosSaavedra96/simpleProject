import { fromJS } from 'immutable';

const INIT_STATE = {
    notes:[],
    loading: false,
};

const notesReducer = (state = fromJS(INIT_STATE), action) => {
    switch (action.type) {
        case 'CREATE_NOTE_REQUEST':
            return state.merge({
                notes: notes.push(action.payload.note),
                loading: true,
            });
        case 'CREATE_NOTE_SUCCESS':
            return state.merge({
                loading:false
            });
        default:
            return state;
    }
}

export default notesReducer;