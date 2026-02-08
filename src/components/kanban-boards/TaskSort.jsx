import SortSvg from "../svgs/SortSvg";
import { useState } from "react";

function TaskSort() {
      const [showSortMenu, setShowSortMenu] = useState(false);
    
    return (
        <div className="relative">
            <button
                type="button"
                onClick={() => setShowSortMenu(!showSortMenu)}
                className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 bg-white border border-gray-200 cursor-pointer rounded-lg hover:bg-gray-50 focus:outline-none"
                data-menu-toggle="todo-sort-menu"
            >
                <SortSvg />
                Sort
            </button>
            {
                showSortMenu && (
                    <div
                        className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-gray-700 py-2 z-40"
                        id="todo-sort-menu"
                        data-menu
                    >
                        <p
                            className="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider cursor-pointer"
                        >
                            Sort by date
                        </p>
                        <button
                            type="button"
                            className="w-full text-left px-4 py-2 hover:bg-gray-50 cursor-pointer"
                        >
                            Newest first
                        </button>
                        <button
                            type="button"
                            className="w-full text-left px-4 py-2 hover:bg-gray-50 cursor-pointer"
                        >
                            Oldest first
                        </button>
                    </div>
                )
            }
        </div>
    );
};
export default TaskSort;