import React, { useContext } from "react";
import "./Tag.scss";
import { AppContext } from "../../../context";
import { IconX } from "../../Icons/Icons";

const Tag = ({ text, attribute }) => {
	const { selectedAttributes, setSelectedAttributes } = useContext(AppContext);

	const handleRemoveTag = (e, type, value) => {
		if (Array.isArray(selectedAttributes[type])) {
			const filteredArray = selectedAttributes[type].filter((selected) => selected !== value);
			setSelectedAttributes({ ...selectedAttributes, [type]: filteredArray });
		} else {
			setSelectedAttributes({ ...selectedAttributes, [type]: "" }); // empty string if single option
		}
	};

	return (
		<div className="Tag" onClick={(e) => handleRemoveTag(e, attribute, text)}>
			<p>{text}</p>
			<IconX />
		</div>
	);
};

export default Tag;
