import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import "./Tag.scss";
import { removeAllQueriesFromURL, removeQueryFromURL } from "../../../utils";
import { AppContext } from "../../../context";
import { IconX } from "../../Icons/Icons";
import { katalogArr } from "../../../data";

const Tag = ({ text, attribute }) => {
	const { dispatch } = useContext(AppContext);
	const history = useHistory();

	const handleRemoveTag = (e, attribute, text) => {
		console.log(attribute);
		if (attribute === "cenaOd" || attribute === "cenaDo") {
			dispatch({ type: "REMOVE_PRICE", attributeType: attribute });
			removeAllQueriesFromURL(history, attribute);
		} else {
			dispatch({ type: "REMOVE", attributeType: attribute, value: text });
			removeQueryFromURL(history, text);
		}
	};

	if (attribute === "katalog") {
		const category = katalogArr.find((katalog) => katalog.katalogID === text);

		return (
			<div className="Tag" onClick={(e) => handleRemoveTag(e, attribute, text)}>
				<p>{`${category.pohlavi}:  ${category.druh}`}</p>
				<IconX />
			</div>
		);
	}

	if (attribute === "velikost" || attribute === "barva") {
		return (
			<div className="Tag" onClick={(e) => handleRemoveTag(e, attribute, text)}>
				<p>{`${attribute}: ${text}`}</p>
				<IconX />
			</div>
		);
	}

	if (attribute === "cenaOd" || attribute === "cenaDo") {
		return (
			<div className="Tag" onClick={(e) => handleRemoveTag(e, attribute, text)}>
				<p>{`${attribute === "cenaOd" ? "od" : "do"}: ${text} Kč`}</p>
				<IconX />
			</div>
		);
	}

	return (
		<div className="Tag" onClick={(e) => handleRemoveTag(e, attribute, text)}>
			<p>{text}</p>
			<IconX />
		</div>
	);
};

export default Tag;
