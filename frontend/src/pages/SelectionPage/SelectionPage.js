import React, { useEffect, useContext, useState } from "react";
import List from "../../components/List/List";
import SearchConsole from "../../components/SearchConsole/SearchConsole";
import Tags from "../../components/Tags/Tags";
import { useURLParams, useFetch, useUpdateStateWithParams } from "../../custom hooks";
import { AppContext } from "../../context";

const SelectionPage = () => {
	const { searchParams } = useURLParams();
	const { dispatch } = useContext(AppContext);
	const predmety = useFetch(
		`http://localhost:3100/api/items?${searchParams.params.toString()}`,
		{}
	);
	useUpdateStateWithParams(searchParams);

	return (
		<>
			<SearchConsole />
			<Tags />
			{!predmety ? <div>LOADING</div> : <List predmety={predmety.result} />}
		</>
	);
};

export default SelectionPage;
