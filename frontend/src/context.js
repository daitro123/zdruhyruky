import React, { createContext, useReducer, useState } from "react";
import { searchReducer, initState } from "./reducers/searchReducer";
import { userReducer } from "./reducers/userReducer";
export const AppContext = createContext();

const userInit = {
	username: "",
	accessToken: "",
};

export const AppProvider = ({ children }) => {
	const [predmety, setPredmety] = useState([]);
	const [searchState, dispatch] = useReducer(searchReducer, initState);

	return (
		<AppContext.Provider value={{ searchState, dispatch, predmety, setPredmety }}>
			{children}
		</AppContext.Provider>
	);
};
