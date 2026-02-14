import React, { useState, useContext } from 'react';
import VerticalEllipsisSvg from '../svgs/VerticalEllipsisSvg';
import { TaskContext } from '../../context/TaskContext';

function CardActionMenu({ task }) {
    const [showActionMenu, setShowActionMenu] = useState(false);
    const { openEditModal, deleteTask } = useContext(TaskContext);

    const handleEdit = () => {
        openEditModal(task);
        setShowActionMenu(false);
    };

    const handleDelete = () => {
        deleteTask(task.id);
        setShowActionMenu(false);
    };

    return (
        <div
            className="absolute top-4 right-4 text-gray-500"
            data-card-menu-container
        >
            <button
                onClick={() => setShowActionMenu(!showActionMenu)}
                type="button"
                className="p-1 rounded-full hover:bg-gray-100 hover:text-gray-700 focus:outline-none cursor-pointer"
                data-card-menu-toggle="wireframes-menu"
                aria-label="Open card menu"
            >
                <VerticalEllipsisSvg />
            </button>
            {
                showActionMenu && (
                    <div
                        className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-gray-700 py-2 z-40"
                        id="wireframes-menu"
                        data-card-menu      
                    >
                        <p
                            className="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider"
                        >
                            Move to
                        </p>
                        <button
                            type="button"
                            className="w-full text-left px-4 py-2 hover:bg-gray-50 cursor-pointer"
                        >
                            In Progress
                        </button>
                        <button
                            type="button"
                            className="w-full text-left px-4 py-2 hover:bg-gray-50 cursor-pointer"
                        >
                            Done
                        </button>
                        <div
                            className="border-t border-gray-100 mt-2 pt-2 space-y-1"
                        >
                            <button
                                type="button"
                                onClick={handleEdit}
                                className="w-full text-left px-4 py-2 hover:bg-gray-50 cursor-pointer"
                            >
                                Edit Card
                            </button>
                            <button
                                type="button"
                                onClick={handleDelete}
                                className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 cursor-pointer"
                            >
                                Delete Card
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};
export default CardActionMenu;