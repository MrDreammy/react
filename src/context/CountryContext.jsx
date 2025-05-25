import { createContext } from 'react';

export const CountryContext = createContext();

export const initialState = {
    countries: [],
    selectedCountry: null
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_COUNTRIES':
            return { ...state, countries: action.payload, selectedCountry: action.payload[0] };
        case 'SET_SELECTED_COUNTRY':
            return { ...state, selectedCountry: action.payload };
        default:
            return state;
    }
};