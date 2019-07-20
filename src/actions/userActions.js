import { LOGIN_USER, LOGOUT_USER, SET_ERROR, CLEAR_ERROR } from "./constants";
import axios from "axios";

export const loginUser = credentials => dispatch => {
	axios
		.post(
			"https://uxcandy.com/~shapoval/test-task-backend/v2/login?developer=RomanDemyanyuk",
			credentials
		)
		.then(res => {
			if (res.data.status === "error") {
				dispatch({
					type: SET_ERROR,
					payload: { login: res.data.message }
				});
			}
			if (res.data.message.token) {
				const { token } = res.data.message;
				localStorage.setItem("token", token);
				dispatch({ type: LOGIN_USER });
				dispatch({ type: CLEAR_ERROR, payload: "login" });
			}
		})
		.catch(err => console.error(err));
};

export const logoutUser = () => dispatch => {
	localStorage.removeItem("token");
	dispatch({ type: LOGOUT_USER });
};
