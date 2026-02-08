import Column from './Column';

function KanbanBoard({ tasks }) {
  return (
    <div className="flex-1 p-4 sm:p-6 lg:p-8 min-h-0">
      <div className="flex flex-col gap-6 xl:flex-row h-full">
        <Column title="To-do" status="todo" tasks={tasks} />
        <Column title="In Progress" status="in-progress" tasks={tasks} />
        <Column title="Done" status="done" tasks={tasks} />
      </div>
    </div>
  );
}

export default KanbanBoard;