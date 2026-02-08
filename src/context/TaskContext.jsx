import { createContext, useReducer } from 'react';
import { taskReducer, initialState, TASK_ACTIONS } from '../Reducers/TaskReducer';

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  const defaultTask = {
    id: crypto.randomUUID(),
    title: '',
    description: '',
    tag: 'design',
    date: '',
    status: 'todo',
    tagColor: {
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
    },
    createdAt: new Date()
  };

  // Action dispatchers
  const openAddModal = () => {
    dispatch({ type: TASK_ACTIONS.OPEN_ADD_MODAL });
  };

  const openEditModal = (task) => {
    dispatch({ type: TASK_ACTIONS.OPEN_EDIT_MODAL, payload: task });
  };

  const closeModal = () => {
    dispatch({ type: TASK_ACTIONS.CLOSE_MODAL });
  };

  const submitTask = (newTask) => {
    dispatch({ type: TASK_ACTIONS.SUBMIT_TASK, payload: newTask });
  };

  const deleteTask = (taskId) => {
    if (confirm('Are you sure you want to delete this task?')) {
      dispatch({ type: TASK_ACTIONS.DELETE_TASK, payload: taskId });
    }
  };

  const value = {
    // State
    tasks: state.tasks,
    showTaskModal: state.showTaskModal,
    editingTask: state.editingTask,
    defaultTask,
    // Actions
    openAddModal,
    openEditModal,
    closeModal,
    submitTask,
    deleteTask,
  };

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
}
