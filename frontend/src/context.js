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
					[action.attributeType]: [...state[action.attributeType], ...action.value],
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
	const [products, setProducts] = useState([]);
	const [state, dispatch] = useReducer(reducer, initState);

	return (
		<AppContext.Provider value={{ state, dispatch, products, setProducts }}>
			{children}
		</AppContext.Provider>
	);
};
