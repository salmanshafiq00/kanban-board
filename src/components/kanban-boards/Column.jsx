import TaskCard from './TaskCard';
import TaskFilter from './TaskFilter';
import TaskSort from './TaskSort';

function Column({ title, status, tasks }) {
  const columnTasks = tasks.filter(task => task.status === status);

  return (
    <div className="flex-1 flex flex-col min-w-0 w-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-semibold text-gray-900">
            {title}
          </h2>
          <span className="text-sm font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
            {columnTasks.length}
          </span>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <TaskFilter />
          <TaskSort />
        </div>
      </div>

      <div className="space-y-4 flex-1 overflow-visible lg:overflow-y-auto">
        {columnTasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default Column;
