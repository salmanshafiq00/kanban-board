import { useState } from 'react'
import './App.css'
import KanbanBoard from './components/kanban-boards/KanbanBoard'
import TaskModal from './components/kanban-boards/TaskModal'
import Header from './Header'
import Sidebar from './Sidebar'

function App() {
  const [showTaskModal, setShowTaskModal] = useState(false);

  return (
    <>

      <div className="bg-gray-50">
        <div className="min-h-screen flex flex-col lg:flex-row">
          <Sidebar />

          <main className="flex-1 flex flex-col min-h-0">
            <Header onShowModal={() => setShowTaskModal(true)} />

            <KanbanBoard />
            {showTaskModal && <TaskModal onClose={() => setShowTaskModal(false)} />}
          </main>
        </div>
      </div>
    </>
  )
}

export default App
