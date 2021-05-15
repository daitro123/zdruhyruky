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
		dispatch({ type: "RESET" });
		dispatch({ type: "ADD", attributeType: "katalog", value: query.getAll("katalog") });
		dispatch({ type: "ADD", attributeType: "barva", value: query.getAll("barva") });
		dispatch({ type: "ADD", attributeType: "velikost", value: query.getAll("velikost") });
		dispatch({ type: "ADD", attributeType: "znacka", value: query.getAll("znacka") });
		dispatch({ type: "ADD", attributeType: "stav", value: query.getAll("stav") });
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
