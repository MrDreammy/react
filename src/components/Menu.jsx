import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Menu() {
    return (
        <nav className="flex gap-4 p-4 bg-gray-200">
            <NavLink
                to="/"
                className={({ isActive }) => isActive ? 'font-bold text-blue-600' : 'text-black'}>
                Home
            </NavLink>
            <NavLink
                to="/countries"
                className={({ isActive }) => isActive ? 'font-bold text-blue-600' : 'text-black'}>
                Countries
            </NavLink>
        </nav>
    );
}