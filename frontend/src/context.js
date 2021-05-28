import React, { createContext, useReducer, useState } from "react";
import { searchReducer, initState } from "./reducers/searchReducer";
import { userReducer, userInit } from "./reducers/userReducer";
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [predmety, setPredmety] = useState([]);
	const [searchState, dispatchSearch] = useReducer(searchReducer, initState);
	const [userState, dispatchUser] = useReducer(userReducer, userInit);

	return (
		<AppContext.Provider
			value={{ searchState, dispatchSearch, predmety, setPredmety, userState, dispatchUser }}
		>
			{children}
		</AppContext.Provider>
	);
};
