import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const [selectedCategories, setSelectedCategories] = useState({
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
			value={{ setProducts, setSelectedCategories, products, selectedCategories }}
		>
			{children}
		</AppContext.Provider>
	);
};
