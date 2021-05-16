import React, { useEffect, useContext, useState } from "react";
import List from "../../components/List/List";
import SearchConsole from "../../components/SearchConsole/SearchConsole";
import Tags from "../../components/Tags/Tags";
import { useURLParams, useFetch } from "../../custom hooks";
import { AppContext } from "../../context";

const SelectionPage = () => {
	const { searchParams } = useURLParams();
	const { dispatch } = useContext(AppContext);
	const predmety = useFetch(`http://localhost:3100/items?${searchParams.params.toString()}`, {});

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

	if (!predmety) {
		return (
			<>
				<SearchConsole />
				<Tags />
				<div>LOADING</div>
			</>
		);
	}

	return (
		<>
			<SearchConsole />
			<Tags />
			<List predmety={predmety.result} />
		</>
	);
};

export default SelectionPage;
