import React from 'react';
import UserItem from './UserItem';

export default function UserList({ users, onUpdate, onDelete }) {
    return (
        <div className="p-2">
            {users.map((user) => (
                <UserItem key={user.id} user={user} onUpdate={onUpdate} onDelete={onDelete} />
            ))}
        </div>
    );
}