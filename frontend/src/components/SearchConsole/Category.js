import React from "react";
import "./Category.scss";

const Category = ({ choices }) => {
	return (
		<div className="Category">
			<div className="row">
				<div className="checkbox-wrapper">
					<input type="checkbox" name="checkbox" id="checkbox1" hidden />
					<label htmlFor="checkbox1" className="checkmark">
						Item 1
					</label>
				</div>
			</div>
			<div className="row">
				<div className="checkbox-wrapper">
					<input type="checkbox" name="checkbox" id="checkbox2" hidden />
					<label htmlFor="checkbox2" className="checkmark">
						Item 2
					</label>
				</div>
			</div>
			<div className="row">
				<div className="checkbox-wrapper">
					<input type="checkbox" name="checkbox" id="checkbox3" hidden />
					<label htmlFor="checkbox3" className="checkmark">
						Item 3
					</label>
				</div>
			</div>
		</div>
	);
};

export default Category;
