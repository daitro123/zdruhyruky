import React, { createContext, useReducer, useState } from "react";

export const AppContext = createContext();

const initState = {
	katalog: [],
	velikost: [],
	barva: [],
	znacka: [],
	cenaOd: "",
	cenaDo: "",
	stav: [],
};

export const reducer = (state, action) => {
	switch (action.type) {
		case "ADD":
			// SelectionPage adds array of queries from url with query.getAll()
			if (Array.isArray(action.value)) {
				return {
					...state,
					[action.attributeType]: [...action.value],
				};
			}
			return {
				...state,
				[action.attributeType]: [...state[action.attributeType], action.value],
			};

		case "REMOVE":
			let newArr = state[action.attributeType].filter((item) => item !== action.value);
			return {
				...state,
				[action.attributeType]: newArr,
			};

		case "SET_PRICE":
			return {
				...state,
				[action.attributeType]: action.value,
			};
		case "REMOVE_PRICE":
			return {
				...state,
				[action.attributeType]: "",
			};

		case "RESET":
			return {
				...initState,
			};
		default:
			break;
	}
};

export const AppProvider = ({ children }) => {
	const [predmety, setPredmety] = useState([]);
	const [searchState, dispatch] = useReducer(reducer, initState);

	return (
		<AppContext.Provider value={{ searchState, dispatch, predmety, setPredmety }}>
			{children}
		</AppContext.Provider>
	);
};
