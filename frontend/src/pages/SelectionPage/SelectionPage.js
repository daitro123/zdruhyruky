import React, { useEffect, useContext } from "react";
import List from "../../components/List/List";
import SearchConsole from "../../components/SearchConsole/SearchConsole";
import Tags from "../../components/Tags/Tags";
import { useURLParams } from "../../custom hooks";
import { AppContext } from "../../context";

const SelectionPage = () => {
	const { searchParams } = useURLParams();
	const { dispatch } = useContext(AppContext);

	useEffect(() => {
		dispatch({ type: "RESET" });
		dispatch({
			type: "ADD",
			attributeType: "katalog",
			value: searchParams.params.getAll("katalog"),
		});
		dispatch({
			type: "ADD",
			attributeType: "barva",
			value: searchParams.params.getAll("barva"),
		});
		dispatch({
			type: "ADD",
			attributeType: "velikost",
			value: searchParams.params.getAll("velikost"),
		});
		dispatch({
			type: "ADD",
			attributeType: "znacka",
			value: searchParams.params.getAll("znacka"),
		});
		dispatch({ type: "ADD", attributeType: "stav", value: searchParams.params.getAll("stav") });
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
