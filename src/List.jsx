import React, { useState, useEffect } from 'react';
import './App.css';

const animals = [
    { type: 'turtle', icon: '🐢' },
    { type: 'octopus', icon: '🐙' },
    { type: 'fish', icon: '🐠' },
    { type: 'flamingo', icon: '🦩' },
    { type: 'penguin', icon: '🐧' }
];

function List() {
    const [list, setList] = useState(animals);
    const [activatedCount, setActivatedCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (activatedCount >= list.length) {
                clearInterval(interval);
                return;
            }

            let index;
            do {
                index = Math.floor(Math.random() * list.length);
            } while (list[index].active);

            const newList = list.map((item, i) =>
                i === index ? { ...item, active: true } : item
            );
            setList(newList);
            setActivatedCount(activatedCount + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [list, activatedCount]);

    return (
        <table>
            <tbody>
            {list.map((animal, index) => (
                <tr key={index} className={animal.active ? 'active' : ''}>
                    <td>{animal.type}</td>
                    <td>{animal.icon}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default List;