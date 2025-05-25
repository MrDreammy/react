import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Country() {
    const { name } = useParams();
    const [country, setCountry] = useState(null);

    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/name/${name}`).then(res => {
            setCountry(res.data[0]);
        });
    }, [name]);

    return (
        <div className="p-4">
            {country ? (
                <div>
                    <h1 className="text-2xl font-bold mb-4">{country.flag} {country.name.official}</h1>
                    <ul className="list-disc ml-6">
                        {Object.entries(country).map(([key, value], idx) => (
                            <li key={idx}><strong>{key}</strong>: {JSON.stringify(value)}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Loading country info...</p>
            )}
        </div>
    );
}
