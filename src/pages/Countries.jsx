import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CountryContext } from '../context/CountryContext';
import axios from 'axios';

export default function Countries() {
    const { state, dispatch } = useContext(CountryContext);

    useEffect(() => {
        if (!state.countries.length) {
            axios.get('https://restcountries.com/v3.1/all').then(res => {
                dispatch({ type: 'SET_COUNTRIES', payload: res.data });
            });
        }
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">All Countries</h1>
            <ul className="space-y-2">
                {state.countries.map((country, idx) => (
                    <li key={idx}>
                        <Link to={`/countries/${country.name.common}`} className="text-blue-600 underline">
                            {country.flag} {country.name.official}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}