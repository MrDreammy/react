import React from 'react';

export default function TodosListItem({ task, onUpdate, onDelete }) {
    const buttonsByStatus = {
        0: [
            { label: 'In progress', status: 1 }
        ],
        1: [
            { label: 'To do', status: 0 },
            { label: 'Done', status: 2 },
            { label: 'On Hold', status: 4 }
        ],
        2: [
            { label: 'To archive', action: () => onDelete(task.id) }
        ],
        4: [
            { label: 'To do', status: 0 },
            { label: 'In progress', status: 1 }
        ]
    };

    return (
        <div className="border p-2 mb-2 rounded shadow">
            <p className="mb-2">{task.title}</p>
            <div className="flex gap-2">
                {buttonsByStatus[task.status]?.map((btn, idx) => (
                    <button
                        key={idx}
                        className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400"
                        onClick={() => btn.action ? btn.action() : onUpdate(task.id, { ...task, status: btn.status })}
                    >
                        {btn.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
