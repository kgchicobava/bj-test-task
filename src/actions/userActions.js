import {LOGIN_USER, LOGOUT_USER} from "./constants";
import axios from "axios";

export const loginUser = (credentials) => dispatch => {
    axios.post("https://uxcandy.com/~shapoval/test-task-backend/v2/login?developer=RomanDemyanyuk", credentials)
        .then(res => {
            console.log(res.data.message)
            if (res.data.message.token) {
                const {token} = res.data.message;
                localStorage.setItem("token", token)
                dispatch({type: LOGIN_USER})
            }
        })
        .catch(err => console.log(err))
}

export const logoutUser = () => dispatch => {
    localStorage.removeItem("token")
    dispatch({type: LOGOUT_USER})
}