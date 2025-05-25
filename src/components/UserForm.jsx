import React, { useRef } from 'react';

export default function UserForm({ onAdd }) {
    const nameRef = useRef();
    const marriedRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            name: nameRef.current.value,
            married: marriedRef.current.checked
        };
        onAdd(newUser);
        e.target.reset();
    };

    return (
        <form onSubmit={handleSubmit} className="p-2">
            <input ref={nameRef} type="text" placeholder="Name" required className="border p-1 mr-2" />
            <label className="mr-2">
                <input ref={marriedRef} type="checkbox" /> Married
            </label>
            <button type="submit" className="bg-blue-500 text-white px-2 py-1 rounded">Add User</button>
        </form>
    );
}