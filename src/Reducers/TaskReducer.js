import { getAllTasks } from "../data/tasks";

const initialState = {
    tasks: getAllTasks(),
    showTaskModal: false,
    editingTask: null,
};

// Action types
export const TASK_ACTIONS = {
    OPEN_ADD_MODAL: 'OPEN_ADD_MODAL',
    OPEN_EDIT_MODAL: 'OPEN_EDIT_MODAL',
    CLOSE_MODAL: 'CLOSE_MODAL',
    ADD_TASK: 'ADD_TASK',
    UPDATE_TASK: 'UPDATE_TASK',
    DELETE_TASK: 'DELETE_TASK',
    SUBMIT_TASK: 'SUBMIT_TASK',
};

const taskReducer = (state, action) => {
    switch (action.type) {
        case TASK_ACTIONS.OPEN_ADD_MODAL:
            return {
                ...state,
                showTaskModal: true,
                editingTask: null,
            };

        case TASK_ACTIONS.OPEN_EDIT_MODAL:
            return {
                ...state,
                showTaskModal: true,
                editingTask: action.payload,
            };

        case TASK_ACTIONS.CLOSE_MODAL:
            return {
                ...state,
                showTaskModal: false,
                editingTask: null,
            };

        case TASK_ACTIONS.ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
                showTaskModal: false,
                editingTask: null,
            };

        case TASK_ACTIONS.UPDATE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload.id ? action.payload : task
                ),
                showTaskModal: false,
                editingTask: null,
            };

        case TASK_ACTIONS.DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload),
            };

        case TASK_ACTIONS.SUBMIT_TASK:
            if (state.editingTask) {
                return {
                    ...state,
                    tasks: state.tasks.map(task =>
                        task.id === action.payload.id ? action.payload : task
                    ),
                    showTaskModal: false,
                    editingTask: null,
                };
            } else {
                return {
                    ...state,
                    tasks: [...state.tasks, action.payload],
                    showTaskModal: false,
                    editingTask: null,
                };
            }

        default:
            return state;
    }
};

export {
    taskReducer,
    initialState
}