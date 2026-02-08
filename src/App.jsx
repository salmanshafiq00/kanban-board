import { useState } from 'react'
import './App.css'
import KanbanBoard from './components/kanban-boards/KanbanBoard'
import TaskModal from './components/kanban-boards/TaskModal'
import Header from './Header'
import Sidebar from './Sidebar'

const defaultTask = {
  id: crypto.randomUUID(),
  title: '',
  description: '',
  tag: 'design',
  date: '',
  status: 'todo',
};

function App() {
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [task, setTask] = useState(defaultTask);


  const handleSubmit = (newTask) => {
    console.log('Task submitted from App:', newTask);
    setShowTaskModal(false); // Close the modal after submission
  };

  return (
    <>

      <div className="bg-gray-50">
        <div className="min-h-screen flex flex-col lg:flex-row">
          <Sidebar />

          <main className="flex-1 flex flex-col min-h-0">
            <Header onShowModal={() => setShowTaskModal(true)} />

            <KanbanBoard />
            {
              showTaskModal &&
              <TaskModal
                task={task}
                setTask={setTask}
                onSubmit={handleSubmit}
                onClose={() => setShowTaskModal(false)} />
            }
          </main>
        </div>
      </div>
    </>
  )
}

export default App
