import React, { useEffect, useContext } from "react";
import List from "../../components/List/List";
import SearchConsole from "../../components/SearchConsole/SearchConsole";
import Tags from "../../components/Tags/Tags";
import { useQuery } from "../../custom hooks";
import { AppContext } from "../../context";

const SelectionPage = () => {
	const query = useQuery();
	const { dispatch } = useContext(AppContext);

	useEffect(() => {
		dispatch({ type: "ADD", attributeType: "katalog", value: query.getAll("katalog") });
		dispatch({ type: "ADD", attributeType: "barva", value: query.getAll("barva") });
		// setSelectedAttributes({
		// 	...selectedAttributes,
		// 	katalog: query.getAll("katalog"),
		// 	barva: query.getAll("barva"),
		// });
	}, []);

	return (
		<>
			<SearchConsole />
			<Tags />
			<List />
		</>
	);
};

export default SelectionPage;
