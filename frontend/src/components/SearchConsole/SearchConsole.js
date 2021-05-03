import React from "react";
import { Link } from "react-router-dom";
import "./SearchConsole.scss";

const SearchConsole = ({ match }) => {
	console.log(match);

	const category = match.params.category;
	const type = match.params.type;

	return (
		<div className="SearchConsole container">
			<div className="console">
				<div className="breadcrumbs">
					<Link to="/">home</Link> / <Link to={`/${category}`}>{category}</Link>{" "}
					{type && `/ ${type}`}
				</div>
				<div className="categories">
					<button className="category">Katalog</button>
					<button className="category">Velikost</button>
					<button className="category">Barva</button>
					<button className="category">Značka</button>
					<button className="category">Cena</button>
					<button className="category">Stav</button>
				</div>
			</div>
			<div className="tags"></div>
		</div>
	);
};

export default SearchConsole;
