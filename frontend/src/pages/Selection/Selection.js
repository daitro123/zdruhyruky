import React from "react";
import List from "../../components/List/List";
import SearchConsole from "../../components/SearchConsole/SearchConsole";
import Tags from "../../components/Tags/Tags";

const Selection = ({ match }) => {
	const gender = match.params.gender;
	const attribute = match.params.attribute;

	return (
		<>
			<SearchConsole gender={gender} attribute={attribute} />
			<Tags gender={gender} />
			<List />
		</>
	);
};

export default Selection;
