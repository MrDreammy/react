import React from 'react';
import TodosListItem from './TodosListItem';

export default function TodosList({ title, tasks, onUpdate, onDelete }) {
    return (
        <div className="w-1/4 bg-white p-4 rounded shadow">
            <h2 className="font-bold text-lg mb-2">{title} ({tasks.length})</h2>
            {tasks.map(task => (
                <TodosListItem key={task.id} task={task} onUpdate={onUpdate} onDelete={onDelete} />
            ))}
        </div>
    );
}