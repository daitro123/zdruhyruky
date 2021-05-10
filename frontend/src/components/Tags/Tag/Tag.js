import React, { useContext } from "react";
import "./Tag.scss";
import { AppContext } from "../../../context";
import { IconX } from "../../Icons/Icons";

const Tag = ({ text, category }) => {
	const { selectedCategories, setSelectedCategories } = useContext(AppContext);

	const handleRemoveTag = (e, type, value) => {
		if (Array.isArray(selectedCategories[type])) {
			const filteredArray = selectedCategories[type].filter((selected) => selected !== value);
			setSelectedCategories({ ...selectedCategories, [type]: filteredArray });
		} else {
			setSelectedCategories({ ...selectedCategories, [type]: "" }); // empty string if single option
		}
	};

	return (
		<div className="Tag" onClick={(e) => handleRemoveTag(e, category, text)}>
			<p>{text}</p>
			<IconX />
		</div>
	);
};

export default Tag;
