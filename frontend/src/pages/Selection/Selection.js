import React from "react";
import List from "../../components/List/List";
import SearchConsole from "../../components/SearchConsole/SearchConsole";
import Tags from "../../components/Tags/Tags";

const Selection = ({ match }) => {
	const category = match.params.category;
	const gender = match.params.gender;

	return (
		<>
			<SearchConsole category={category} gender={gender} />
			<Tags gender={gender} />
			<List />
		</>
	);
};

export default Selection;
