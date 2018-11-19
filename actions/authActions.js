
export function loginRequest(email, password) {
    return {
        type: LOGIN_REQUEST,
        payload: { email, password }
    }
}

