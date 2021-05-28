import React, { useContext } from "react";
import { useURLParams } from "../../../custom hooks";
import "./Tag.scss";
import { AppContext } from "../../../context";
import { IconX } from "../../Icons/Icons";
import { katalogArr } from "../../../data";

const Tag = ({ text, attribute }) => {
	const { dispatchSearch } = useContext(AppContext);
	const { searchParams } = useURLParams();

	const handleRemoveTag = (e, attribute, text) => {
		if (attribute === "cenaOd" || attribute === "cenaDo") {
			dispatchSearch({ type: "REMOVE_PRICE", attributeType: attribute });
			searchParams.removeAll(attribute);
		} else {
			dispatchSearch({ type: "REMOVE", attributeType: attribute, value: text });
			searchParams.remove(text);
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
