import React, { useEffect, useState } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from './services/api';
import TodosForm from './components/TodosForm';
import TodosLists from './components/TodosLists';

export default function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasks().then(res => setTasks(res.data));
    }, []);

    const handleAdd = (task) => {
        createTask(task).then(res => setTasks(prev => [...prev, res.data]));
    };

    const handleUpdate = (id, updatedTask) => {
        updateTask(id, updatedTask).then(res => {
            setTasks(prev => prev.map(task => task.id === id ? res.data : task));
        });
    };

    const handleDelete = (id) => {
        deleteTask(id).then(() => {
            setTasks(prev => prev.filter(task => task.id !== id));
        });
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
            <TodosForm onAdd={handleAdd} />
            <TodosLists tasks={tasks} onUpdate={handleUpdate} onDelete={handleDelete} />
        </div>
    );
}