import './App.css'

function App({ title, data }) {
    return (
        <div>
            <h1>{title}</h1>
            <table border='1'>
                {data.map(group => (
                    <tr key={group.id}>
                        <th>{group.category}</th>
                        {group.animals.map(animal => (
                            <td key={animal.name} style={{ backgroundColor: animal.color }}>
                                {animal.name}
                            </td>
                        ))}
                    </tr>
                ))}
            </table>
        </div>
    );
}
export default App
