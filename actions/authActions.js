export function loginInit() {
    return {
        type: 'LOGIN_INIT'
    }
}

export function loginRequest(username, password) {
    return {
        type: 'LOGIN_REQUEST',
        payload: { username, password }
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

export function loginFetch(username, password) {
    return (dispatch) => {
        dispatch(loginRequest(username,password));
        return dispatch(loginSuccess({email:'email@user.com'}));
    }
}

export function signinInit() {
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

export function logoutRequest() {
    return {
        type: 'LOGOUT_REQUEST'
    }
}

export function logoutSuccess() {
    return {
        type: 'LOGOUT_SUCCESS'
    }
}

export function logoutFetch() {
    return (dispatch) => {
        dispatch(logoutRequest());
        return dispatch(logoutSuccess());
    }
}
