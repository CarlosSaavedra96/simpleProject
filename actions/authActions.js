export function loginInit(email, password) {
    return {
        type: 'LOGIN_INIT'
    }
}

export function loginRequest(email, password) {
    return {
        type: 'LOGIN_REQUEST',
        payload: { email, password }
    }
}

export function loginSuccess(response) {
    return {
        type: 'LOGIN_SUCCESS',
        payload: { response }
    }
}

export function loginFailure(response) {
    return {
        type: 'LOGIN_FAILURE',
        payload: { response }
    }
}

export function loginFetch(email, password) {
    return (dispatch) => {
        dispatch(loginRequest(email,password));
        return dispatch(loginSuccess({username:'user'}));
    }
}

export function signinInit(email, password) {
    return {
        type: 'SIGNIN_INIT'
    }
}

export function signinRequest(username, email, password) {
    return {
        type: 'SIGNIN_REQUEST',
        payload: { username, email, password }
    }
}

export function signinSuccess(response) {
    return {
        type: 'SIGNIN_SUCCESS',
        payload: { response }
    }
}

export function signinFailure(response) {
    return {
        type: 'SIGNIN_FAILURE',
        payload: { response }
    }
}

export function signinFetch(username, email, password) {
    return (dispatch) => {
        dispatch(signinRequest(username, email, password));
        return dispatch(signinSuccess({}));
    }
}
