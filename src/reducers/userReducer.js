import { LOGIN_USER, LOGOUT_USER } from "../actions/constants";
const initialState = {
	isAuthenticated: false
};

export default (state = initialState, { type, payload }) => {
	switch (type) {

		case LOGIN_USER:
			return { ...state, isAuthenticated: true };

		case LOGOUT_USER:
			return { ...state, isAuthenticated: false };

		default:
			return state;
	}
};
