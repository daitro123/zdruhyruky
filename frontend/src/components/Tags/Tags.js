import React, { useContext } from "react";
import "./Tags.scss";
import { AppContext } from "../../context";
import Tag from "./Tag/Tag";

const Tags = () => {
	const { searchState } = useContext(AppContext);

	return (
		<div className="Tags container">
			{Object.entries(searchState).map((attribute) => {
				// Object.entries creates an array of obj.keys and values... [attribute[0] key, attribute[1] value(s)]

				// checking for only-one-choice attributes
				if (attribute[1] && !Array.isArray(attribute[1])) {
					return (
						<Tag
							key={attribute[0] + attribute[1]}
							attribute={attribute[0]}
							text={attribute[1]}
						/>
					);
				} else if (Array.isArray(attribute[1])) {
					// nested map for multiple-choice attributes
					return (
						<>
							{attribute[1].map((selection) => {
								return (
									<Tag
										key={attribute[0] + selection}
										attribute={attribute[0]}
										text={selection}
									/>
								);
							})}
						</>
					);
				}
			})}
		</div>
	);
};

export default Tags;
