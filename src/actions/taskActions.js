import { ADD_TASK, FETCH_TASKS, EDIT_TASK, SET_ERROR, CLEAR_ERROR } from "./constants";
import axios from "axios";



export const getTasks = () => dispatch => {
	axios
		.get(
			"https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=RomanDemyanyuk"
		)
		.then(res => {
			dispatch({
				type: FETCH_TASKS,
				payload: {
					tasks: res.data.message.tasks,
					numOfTasks: res.data.message.total_task_count,
					page: 1
				}
			});
		})
		.catch(err => console.error());
};

export const addTask = task => dispatch => {
	axios
		.post(
			"https://uxcandy.com/~shapoval/test-task-backend/v2/create?developer=RomanDemyanyuk",
			task
		)
		.then(res => {
			if (res.data.status === "error") {
				dispatch({
					type: SET_ERROR,
					payload: { adding: res.data.message }
				});
			} else {
				getTasks()(dispatch);
				dispatch({type: CLEAR_ERROR, payload: "adding"})
			}
		})
		.catch(err => {
			console.error(err);
		});
};

export const changePage = page => dispatch => {
	axios
		.get(
			`https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=RomanDemyanyuk&page=${page}`
		)
		.then(res => {
			dispatch({
				type: FETCH_TASKS,
				payload: {
					tasks: res.data.message.tasks,
					numOfTasks: res.data.message.total_task_count,
					page
				}
			});
		})
		.catch(err => console.error(err));
};

export const changeTask = (id, change) => dispatch => {
	for (let pair of change.entries()) {
		dispatch({ type: EDIT_TASK, payload: { pair, id } });
	}
	axios
		.post(
			`https://uxcandy.com/~shapoval/test-task-backend/v2/edit/${id}?developer=RomanDemyanyuk`,
			change
		)
		.then(res => {
			if (res.data.status === "error") {
				dispatch({
					type: SET_ERROR,
					payload: { edit: res.data.message.token }
				});
			}
		})
		.catch(err => console.error(err));
};

export const sortTasks = paramStr => dispatch => {
	axios
		.get(
			`https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=RomanDemyanyuk&${paramStr}`
		)
		.then(res => {
			dispatch({
				type: FETCH_TASKS,
				payload: {
					tasks: res.data.message.tasks,
					numOfTasks: res.data.message.total_task_count,
					page: 1
				}
			});
		})
		.catch(err => console.error(err));
};
