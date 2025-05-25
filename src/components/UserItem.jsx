import React, { useState } from 'react';

export default function UserItem({ user, onUpdate, onDelete }) {
    const [editing, setEditing] = useState(false);
    const [name, setName] = useState(user.name);
    const [married, setMarried] = useState(user.married);

    const handleSave = () => {
        onUpdate(user.id, { name, married });
        setEditing(false);
    };

    return (
        <div className="flex items-center justify-between border-b py-2">
            {editing ? (
                <>
                    <input value={name} onChange={(e) => setName(e.target.value)} className="border mr-2 p-1" />
                    <label className="mr-2">
                        <input type="checkbox" checked={married} onChange={(e) => setMarried(e.target.checked)} /> Married
                    </label>
                    <button onClick={handleSave} className="bg-green-500 text-white px-2 py-1 rounded mr-1">Save</button>
                </>
            ) : (
                <>
                    <span>{user.name} - {user.married ? 'Married' : 'Single'}</span>
                    <button onClick={() => setEditing(true)} className="bg-yellow-400 px-2 py-1 rounded mr-1">Edit</button>
                </>
            )}
            <button onClick={() => onDelete(user.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
        </div>
    );
}