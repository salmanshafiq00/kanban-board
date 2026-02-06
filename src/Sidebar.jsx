import BoardSvg from "./components/svgs/BoardSvg";
import CalendarSvg from "./components/svgs/CalendarSvg";
import DashboardSvg from "./components/svgs/DashboardSvg";
import SettingSvg from "./components/svgs/SettingSvg";
import WorkspaceSvg from "./components/svgs/WorkspaceSvg";

function Sidebar() {
  return (
    <aside
      className="w-full lg:w-64 bg-white border-gray-200 flex flex-col border-b lg:border-b-0 lg:border-r"
    >
      <div className="px-4 py-6 sm:px-6">
        <div className="flex items-center gap-2 mb-8">
          <div
            className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center"
          >
            <span className="text-white font-bold text-lg">K</span>
          </div>
          <span className="font-bold text-lg text-gray-900">Kanban</span>
        </div>

        <nav className="space-y-1">
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <DashboardSvg />
            <span>Dashboard</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <WorkspaceSvg />
            <span>Workspace</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-blue-600 bg-blue-50 rounded-lg font-medium"
          >
            <BoardSvg />
            <span>Board</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <CalendarSvg />
            <span>Calendar</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <SettingSvg />
            <span>Settings</span>
          </a>
        </nav>
      </div>

      <div className="mt-auto px-4 py-6 sm:px-6 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold"
          >
            AT
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900">
              Anna Taylor
            </p>
            <p className="text-xs text-gray-500 truncate">
              anna.taylor@mail.com
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;