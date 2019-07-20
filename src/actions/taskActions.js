import {ADD_TASK, FETCH_TASKS, EDIT_TASK} from "./constants";
import axios from "axios";

export const addTask = task => dispatch => {
	axios
		.post("https://uxcandy.com/~shapoval/test-task-backend/v2/create?developer=RomanDemyanyuk",
			task
		)
		.then(res => {
            // dispatch({type: ADD_TASK, payload: res.data.message})
		})
		.catch(err => {
			console.log(err)
		});
};

export const getTasks = () => dispatch => {
    axios.get("https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=RomanDemyanyuk")
        .then(res => {
            console.log(res);
            dispatch({type: FETCH_TASKS, payload: {tasks: res.data.message.tasks, numOfTasks: res.data.message.total_task_count, page: 1}})
        })
        .catch(err => console.log(err))
}

export const changePage = page => dispatch => {
    axios.get(`https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=RomanDemyanyuk&page=${page}`)
        .then(res => {
            dispatch({type: FETCH_TASKS, payload: {tasks: res.data.message.tasks, numOfTasks: res.data.message.total_task_count, page}})
        })
        .catch(err => console.log(err))
}

export const changeTask = (id, change) => dispatch => {
    for (let pair of change.entries()) {
        dispatch({type: EDIT_TASK, payload: {pair, id}})
    }
    axios.post(`https://uxcandy.com/~shapoval/test-task-backend/v2/edit/${id}?developer=RomanDemyanyuk`,change)
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

export const sortTasks = (paramStr) => dispatch => {
    axios.get(`https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=RomanDemyanyuk&${paramStr}`)
        .then(res => {
            console.log(res)
            dispatch({type: FETCH_TASKS, payload: {tasks: res.data.message.tasks, numOfTasks: res.data.message.total_task_count, page: 1}})
        })
        .catch(err => console.log(err))
}