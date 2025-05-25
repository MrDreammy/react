import React, { useEffect, useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home';
import Countries from './pages/Countries';
import Country from './pages/Country';
import { CountryContext, reducer, initialState } from './context/CountryContext';

export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <CountryContext.Provider value={{ state, dispatch }}>
            <div className="min-h-screen">
                <Menu />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/countries" element={<Countries />} />
                    <Route path="/countries/:name" element={<Country />} />
                </Routes>
            </div>
        </CountryContext.Provider>
    );
}
