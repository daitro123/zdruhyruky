import React from "react";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
	const [products, setProducts] = React.useState([]);

	return <AppContext.Provider value={{ setProducts, products }}>{children}</AppContext.Provider>;
};
