export function createNoteRequest(type, important, title, date) {
    return {
        type: 'CREATE_NOTE_REQUEST',
        payload: { type, important, title, date}
    }
}

export function createNoteSuccess() {
    return {
        type: 'CREATE_NOTE_SUCCESS'
    }
}

export function createNote(type, important, title, date) {
    return (dispatch) => {
        dispatch(createNoteRequest(type, important, title, date));
        return dispatch(createNoteSuccess());
    }
}