import { SET_ERROR, CLEAR_ERROR } from "../actions/constants";

const initialState = {
	adding: {},
	login: {}
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_ERROR:
			return { ...state, ...payload };

		case CLEAR_ERROR:
			return { ...state, [payload]: {} };

		default:
			return state;
	}
};
