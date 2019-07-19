import {ADD_TASK, FETCH_TASKS} from "./constants";
import axios from "axios";

export const addTask = task => dispatch => {
	axios
		.post("https://uxcandy.com/~shapoval/test-task-backend/v2/create?developer=RomanDemyanyuk",
			task
		)
		.then(res => {
            dispatch({type: ADD_TASK, payload: res.data.message})
		})
		.catch(err => {
			console.log(err)
		});
};

export const getTasks = () => dispatch => {
    axios.get("https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=RomanDemyanyuk")
        .then(res => {
            dispatch({type: FETCH_TASKS, payload: res.data.message.tasks})
        })
        .catch(err => console.log(err))
}