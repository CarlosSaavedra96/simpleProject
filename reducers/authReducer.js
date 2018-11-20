import { fromJS } from 'immutable';

const INIT_STATE = {
    username: '',
    email: '',
    password: '',
    loggedIn: false,
    loading: false,
};

const authReducer = (state = fromJS(INIT_STATE), action) => {
    switch (action.type) {
        case 'LOGIN_INIT':
            return state.merge(INIT_STATE);
        case 'LOGIN_REQUEST':
            return state.merge({
                email: action.payload.email,
                password: action.payload.password,
                loading: true,
            });
        case 'LOGIN_SUCCESS':
            return state.merge({
                username: action.payload.response.username,
                loggedIn: true,
                loading: false,
            });
        case 'SIGNIN_INIT':
            return state.merge(INIT_STATE);
        case 'SIGNIN_REQUEST':
            return state.merge({
                username: action.payload.username,
                email: action.payload.email,
                password: action.payload.password,
                loading: true,
            });
        case 'SIGNIN_SUCCESS':
            return state.merge({
                loggedIn: true,
                loading: false,
            });
        case 'LOGOUT_REQUEST':
            return state.merge({
                ...INIT_STATE,
                loading: true,
            })
        case 'LOGOUT_SUCCESS':
            return state.merge({
                loading:false,
            })
        default:
            return state;
    }
};

export default authReducer;
