import React, { useContext, useEffect } from 'react';
import { CountryContext } from '../context/CountryContext';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Home() {
    const { state, dispatch } = useContext(CountryContext);

    useEffect(() => {
        if (!state.countries.length) {
            axios.get('https://restcountries.com/v3.1/all').then(res => {
                dispatch({ type: 'SET_COUNTRIES', payload: res.data });
            });
        }
    }, []);

    const handleSelect = (e) => {
        const selected = state.countries.find(c => c.name.official === e.target.value);
        dispatch({ type: 'SET_SELECTED_COUNTRY', payload: selected });
    };

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Select a Country</h1>
            <select onChange={handleSelect} className="border p-2 mb-4">
                {state.countries.map((country, idx) => (
                    <option key={idx} value={country.name.official}>
                        {country.flag} {country.name.official}
                    </option>
                ))}
            </select>
            {state.selectedCountry && (
                <div>
                    <Link
                        to={`/countries/${state.selectedCountry.name.common}`}
                        className="text-blue-600 underline"
                    >
                        Read more about {state.selectedCountry.flag} {state.selectedCountry.name.official}
                    </Link>
                </div>
            )}
        </div>
    );
}