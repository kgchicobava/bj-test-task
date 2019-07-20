import { FETCH_TASKS, ADD_TASK, EDIT_TASK } from "../actions/constants";

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
        return { ...state, tasks: payload.tasks,  numOfTasks: payload.numOfTasks, page: payload.page}

    case EDIT_TASK:
        console.log(payload)
        return {...state, tasks: state.tasks.map(elem => {
            if (elem.id === payload.id) {
                   return {...elem, [payload.pair[0]] : payload.pair[1]}
             }
             return elem
         })}
    default:
        return state
    }
}
