import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const [selectedAttributes, setSelectedAttributes] = useState({
		selectedPohlavi: "",
		selectedTyp: [],
		selectedVelikost: [],
		selectedBarva: [],
		selectedZnacka: [],
		selectedCenaOd: "",
		selectedCenaDo: "",
		selectedStav: [],
	});

	return (
		<AppContext.Provider
			value={{ setProducts, setSelectedAttributes, products, selectedAttributes }}
		>
			{children}
		</AppContext.Provider>
	);
};
