import { getAllTasks } from "../data/tasks";

const initialState = {
    tasks: getAllTasks()
};

const taskReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };
        case 'UPDATE_TASK':
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload.id ? { ...task, ...action.payload } : task
                )
            };
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            };
        default:
            return state;
    }
};

export {
    taskReducer,
    initialState
}