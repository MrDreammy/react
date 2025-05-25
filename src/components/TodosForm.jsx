import React, { useRef } from 'react';

export default function TodosForm({ onAdd }) {
    const titleRef = useRef();
    const statusRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            title: titleRef.current.value,
            status: parseInt(statusRef.current.value)
        };
        onAdd(newTask);
        e.target.reset();
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input ref={titleRef} type="text" placeholder="Task title" required className="border p-1 mr-2" />
            <select ref={statusRef} className="border p-1 mr-2">
                <option value="0">To Do</option>
                <option value="1">In Progress</option>
                <option value="2">Done</option>
            </select>
            <button type="submit" className="bg-blue-500 text-white px-2 py-1 rounded">Add Task</button>
        </form>
    );
}