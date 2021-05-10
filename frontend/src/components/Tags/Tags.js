import React, { useContext } from "react";
import "./Tags.scss";
import { AppContext } from "../../context";
import Tag from "./Tag/Tag";

const Tags = () => {
	const { selectedCategories } = useContext(AppContext);

	return (
		<div className="Tags container">
			{Object.entries(selectedCategories).map((category) => {
				// Object.entries creates an array of obj.keys and values (category[0] key, category[1] value(s))

				// checking for only-one-choice categories
				if (category[1] && !Array.isArray(category[1])) {
					return (
						<Tag
							key={category[0] + category[1]}
							category={category[0]}
							text={category[1]}
						/>
					);
				} else if (Array.isArray(category[1])) {
					// nested map for multiple-choice categories
					return (
						<>
							{category[1].map((selection) => {
								return (
									<Tag
										key={category[0] + selection}
										category={category[0]}
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
