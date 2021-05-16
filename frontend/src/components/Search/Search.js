import React, { useState, useEffect, useContext } from "react";
import "./Search.scss";
import { AppContext } from "../../context";

const Search = () => {
	const [input, setInput] = useState("");
	const [searchTerm, setSearchTerm] = useState("");
	const [placeholder, setPlaceholder] = useState("Hledat");
	const { setPredmety } = useContext(AppContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		setSearchTerm(input);
	};

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await fetch("http://localhost:3100/items");
				if (response.ok) {
					const data = await response.json();
					setPredmety(data.result);
				} else {
					throw new Error("Fetch has failed");
				}
			} catch (error) {
				alert(error);
			}
		};
		fetchProducts();
	}, [searchTerm, setPredmety]);

	return (
		<div className="Search">
			<form className="search__form" onSubmit={handleSubmit}>
				<input
					type="text"
					className="search__form--input"
					placeholder={placeholder}
					onChange={(e) => setInput(e.target.value)}
					onFocus={() => setPlaceholder("")}
					onBlur={() => setPlaceholder("Hledat")}
				/>
			</form>
		</div>
	);
};

export default Search;
