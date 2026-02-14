import React from 'react';
import CardActionMenu from './CardActionMenu';
import TagBadge from './TagBadge';
import DateSvg from '../svgs/DateSvg';

function TaskCard({ task }) {
    return (
        <div
            className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow relative"
            data-card="wireframes"
            data-column="todo"
        >
            <CardActionMenu task={task} />
            <div className="mb-3">
                <h3
                    className="font-semibold text-gray-900 text-sm"
                >
                    {task.title}
                </h3>
            </div>
            <p className="text-xs text-gray-600 mb-4">
                {task.description}
            </p>
            <div className="flex items-center gap-2 mb-3">
                <TagBadge tagName={task.tag} tagColor={task.tagColor} />
            </div>
            <div
                className="flex items-center gap-1 text-xs text-gray-500"
            >
                <DateSvg />
                {task.date}
            </div>
        </div>
    );
};
export default TaskCard;