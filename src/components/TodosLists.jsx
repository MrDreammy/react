import React from 'react';
import TodosList from './TodosList';

export default function TodosLists({ tasks, onUpdate, onDelete }) {
    const statusMap = {
        0: 'To Do',
        4: 'On Hold',
        1: 'In Progress',
        2: 'Done'
    };

    return (
        <div className="flex justify-between gap-4">
            {Object.entries(statusMap).map(([status, title]) => (
                <TodosList
                    key={status}
                    title={title}
                    tasks={tasks.filter(task => task.status === parseInt(status))}
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}
