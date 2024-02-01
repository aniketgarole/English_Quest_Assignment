import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

const initialState = {
    isLoading: false,
    isError: false,
    isAuth: false,
    token: "",
    userName: "",
    role: ""
}

export const reducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch(type) {
        case LOGIN_REQUEST: return {...state, isLoading: true}
        case LOGIN_SUCCESS: return {...state, isLoading: false, isAuth: true, token: payload.token, userName: payload.userName, role: payload.role}
        case LOGIN_FAILURE: return {...state, isLoading: false, isError: true}
        default: return state
    }
}