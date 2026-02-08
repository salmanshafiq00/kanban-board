import TaskCard from './TaskCard';
import TaskFilter from './TaskFilter';
import TaskSort from './TaskSort';
import { useState } from 'react';

function KanbanBoard({ tasks }) {
  const todoTasks = tasks.filter(task => task.status === 'todo');
  const inProgressTasks = tasks.filter(task => task.status === 'in-progress');
  const doneTasks = tasks.filter(task => task.status === 'done');

  return (
    <div className="flex-1 p-4 sm:p-6 lg:p-8 min-h-0">
      <div className="flex flex-col gap-6 xl:flex-row h-full">
        {/* Todo Column  */}
        <div className="flex-1 flex flex-col min-w-0 w-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-3">
              <h2
                className="text-lg font-semibold text-gray-900"
              >
                To-do
              </h2>
              <span
                className="text-sm font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full"
              > {todoTasks.length} </span
              >
            </div>

            <div className="ml-auto flex items-center gap-2">
              <TaskFilter />
              <TaskSort />
            </div>
          </div>

          <div
            className="space-y-4 flex-1 overflow-visible lg:overflow-y-auto"
          >
            {
              todoTasks.map(task => (
                <TaskCard key={task.id} task={task} />
              ))
            }
          </div>
        </div>

        {/* In Progress Column  */}
        <div className="flex-1 flex flex-col min-w-0 w-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-3">
              <h2
                className="text-lg font-semibold text-gray-900"
              >
                In Progress
              </h2>
              <span
                className="text-sm font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full"
              >{inProgressTasks.length}</span
              >
            </div>
            <div className="ml-auto flex items-center gap-2">
              <TaskFilter />
              <TaskSort />
            </div>
          </div>
          <div
            className="space-y-4 flex-1 overflow-visible lg:overflow-y-auto"
          >
            {
              inProgressTasks.map(task => (
                <TaskCard key={task.id} task={task} />
              ))
            }
          </div>
        </div>

        {/* Done Column  */}
        <div className="flex-1 flex flex-col min-w-0 w-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-3">
              <h2
                className="text-lg font-semibold text-gray-900"
              >
                Done
              </h2>
              <span
                className="text-sm font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full"
              >{doneTasks.length}</span
              >
            </div>
            <div className="ml-auto flex items-center gap-2">
              <TaskFilter />
              <TaskSort />
            </div>
          </div>
          <div
            className="space-y-4 flex-1 overflow-visible lg:overflow-y-auto"
          >
            {
              doneTasks.map(task => (
                <TaskCard key={task.id} task={task} />
              ))
            }
          </div>
        </div>

        
      </div>
    </div>
  );
};
export default KanbanBoard;