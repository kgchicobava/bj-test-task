import { FETCH_TASKS, ADD_TASK } from "../actions/constants";

const initialState = {
    tasks : [],
    numOfTasks: 0,
    page: 1
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case ADD_TASK:
        return {...state, tasks: [...state.tasks, payload]}

    case FETCH_TASKS:
        console.log(payload)
        return { ...state, tasks: payload.tasks,  numOfTasks: payload.numOfTasks, page: payload.page}

    default:
        return state
    }
}
