import './App.css'
import KanbanBoard from './components/kanban-boards/KanbanBoard'
import Header from './Header'
import Sidebar from './Sidebar'

function App() {
  return (
    <>

      <div className="bg-gray-50">
        <div className="min-h-screen flex flex-col lg:flex-row">
          <Sidebar />

          <main className="flex-1 flex flex-col min-h-0">
            <Header />

            <KanbanBoard />
          </main>
        </div>
      </div>
    </>
  )
}

export default App
