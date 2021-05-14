import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import "./Tag.scss";
import { removeQueryFromURL } from "../../../utils";
import { AppContext } from "../../../context";
import { IconX } from "../../Icons/Icons";

const Tag = ({ text, attribute }) => {
	const { dispatch } = useContext(AppContext);
	const history = useHistory();

	const handleRemoveTag = (e, attribute, text) => {
		dispatch({ type: "REMOVE", attributeType: attribute, value: text });
		console.log(history.location.search);
		removeQueryFromURL(history, attribute);

		// const params = new URLSearchParams(history.location.search);
		// params.delete(attribute);
		// history.push({
		// 	pathname: "/predmety",
		// 	search: params.toString(),
		// });
	};

	return (
		<div className="Tag" onClick={(e) => handleRemoveTag(e, attribute, text)}>
			<p>{text}</p>
			<IconX />
		</div>
	);
};

export default Tag;
