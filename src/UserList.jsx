import React, { useState, useEffect } from 'react';

const API_URL = 'https://680fc8ae27f2fdac240f60df.mockapi.io/users';

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);

    const updateUser = async (id, updatedUser) => {
        await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedUser),
        });
        setUsers(users.map(user => (user.id === id ? updatedUser : user)));
    };

    const deleteUser = async (id) => {
        await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
        setUsers(users.filter(user => user.id !== id));
    };

    const handleNameChange = (id, name) => {
        const updatedUser = users.find(user => user.id === id);
        updatedUser.name = name;
        updateUser(id, updatedUser);
    };

    const handleMarriedChange = (id) => {
        const updatedUser = users.find(user => user.id === id);
        updatedUser.married = !updatedUser.married;
        updateUser(id, updatedUser);
    };

    return (
        <table border='1'>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Married</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {users.map((user) => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>
                        <input
                            type='text'
                            value={user.name}
                            onChange={(e) => handleNameChange(user.id, e.target.value)}
                        />
                    </td>
                    <td>
                        <input
                            type='checkbox'
                            checked={user.married}
                            onChange={() => handleMarriedChange(user.id)}
                        />
                    </td>
                    <td>
                        <button onClick={() => deleteUser(user.id)}>Delete</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default UserList;
