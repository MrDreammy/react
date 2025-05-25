import React, { useState, useEffect } from 'react';
import { getUsers, createUser, updateUser, deleteUser } from './services/api';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

export default function App() {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState('');
    const [sortAsc, setSortAsc] = useState(true);
    const [bgColor, setBgColor] = useState('white');

    useEffect(() => {
        getUsers().then(res => setUsers(res.data));
    }, []);

    const handleAdd = (user) => {
        createUser(user).then(res => setUsers(prev => [...prev, res.data]));
    };

    const handleUpdate = (id, updatedUser) => {
        updateUser(id, updatedUser).then(res => {
            setUsers(prev => prev.map(user => user.id === id ? res.data : user));
        });
    };

    const handleDelete = (id) => {
        deleteUser(id).then(() => {
            setUsers(prev => prev.filter(user => user.id !== id));
        });
    };

    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(filter.toLowerCase()));
    const sortedUsers = [...filteredUsers].sort((a, b) => sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));

    return (
        <div className="min-h-screen p-4" style={{ backgroundColor: bgColor }}>
            <h1 className="text-2xl font-bold mb-4">User List</h1>
            <div className="mb-4">
                <input value={filter} onChange={(e) => setFilter(e.target.value)} placeholder="Filter by name" className="border p-1 mr-2" />
                <button onClick={() => setSortAsc(!sortAsc)} className="bg-gray-300 px-2 py-1 rounded mr-2">
                    Sort {sortAsc ? '↓' : '↑'}
                </button>
                <button onClick={() => setBgColor(bgColor === 'white' ? '#f0f8ff' : 'white')} className="bg-purple-300 px-2 py-1 rounded">
                    Toggle Background Color
                </button>
            </div>
            <UserForm onAdd={handleAdd} />
            <UserList users={sortedUsers} onUpdate={handleUpdate} onDelete={handleDelete} />
        </div>
    );
}