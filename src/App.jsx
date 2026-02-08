import { useState, useContext } from 'react'
import './App.css'
import KanbanBoard from './components/kanban-boards/KanbanBoard'
import TaskModal from './components/kanban-boards/TaskModal'
import Header from './Header'
import Sidebar from './Sidebar'
import { TaskProvider, TaskContext } from './context/TaskContext'

function AppContent() {
  const { showTaskModal, editingTask, submitTask, closeModal, openAddModal } = useContext(TaskContext);
  const [task, setTask] = useState(null);

  const currentTask = task || editingTask;

  return (
    <>
      <div className="bg-gray-50">
        <div className="min-h-screen flex flex-col lg:flex-row">
          <Sidebar />

          <main className="flex-1 flex flex-col min-h-0">
            <Header onShowModal={openAddModal} />

            <KanbanBoard />
            {
              showTaskModal &&
              <TaskModal
                task={currentTask}
                setTask={setTask}
                onSubmit={submitTask}
                onClose={closeModal}
              />
            }
          </main>
        </div>
      </div>
    </>
  )
}

function App() {
  return (
    <TaskProvider>
      <AppContent />
    </TaskProvider>
  )
}

export default App
