import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ArrowDownIcon from "./ArrowDownIcon";
import Category from "./Category";
import { useCheckForClickOutside } from "../../custom hooks";
import "./SearchConsole.scss";

const SearchConsole = ({ match }) => {
	const [categoryBtn, setCategoryBtn] = useState({ isOpen: false, name: "" });
	const categoryButtons = useRef(null);
	const category = match.params.category;
	const type = match.params.type;
	useCheckForClickOutside(categoryButtons, ".categories", categoryBtn, setCategoryBtn);

	// close category window if user clicks outside of it
	// useEffect(() => {
	// 	const handleOutsideCategoryClick = (e) => {
	// 		if (!e.target.closest(".categories") && !categoryButtons.current.contains(e.target)) {
	// 			setCategoryBtn({ ...categoryBtn, isOpen: false });
	// 		}
	// 	};
	// 	document.addEventListener("mousedown", handleOutsideCategoryClick);
	// 	return () => {
	// 		document.removeEventListener("mousedown", handleOutsideCategoryClick);
	// 	};
	// }, [categoryBtn]);

	// handles opening and closing of categories popup windows

	const handleCategoryClick = (e, name) => {
		if (categoryBtn.name !== name) {
			setCategoryBtn({ isOpen: true, name: name });
		} else {
			setCategoryBtn({ isOpen: !categoryBtn.isOpen, name: name });
		}
	};

	return (
		<div className="SearchConsole container">
			<div className="console">
				<div className="breadcrumbs">
					<Link to="/">home</Link> / <Link to={`/${category}`}>{category}</Link>{" "}
					{type && `/ ${type}`}
				</div>
				<div className="categories" ref={categoryButtons}>
					<div className="category--wrapper">
						<button
							className="btn--category"
							onClick={(e) => handleCategoryClick(e, "katalog")}
						>
							Katalog
							<ArrowDownIcon />
						</button>
						{categoryBtn.isOpen && categoryBtn.name === "katalog" && <Category />}
					</div>

					<div className="category--wrapper">
						<button
							className="btn--category"
							onClick={(e) => handleCategoryClick(e, "velikost")}
						>
							Velikost
							<ArrowDownIcon />
						</button>
						{categoryBtn.isOpen && categoryBtn.name === "velikost" && <Category />}
					</div>

					<div className="category--wrapper">
						<button
							className="btn--category"
							onClick={(e) => handleCategoryClick(e, "barva")}
						>
							Barva
							<ArrowDownIcon />
						</button>
						{categoryBtn.isOpen && categoryBtn.name === "barva" && <Category />}
					</div>

					<div className="category--wrapper">
						<button
							className="btn--category"
							onClick={(e) => handleCategoryClick(e, "znacka")}
						>
							Značka
							<ArrowDownIcon />
						</button>
						{categoryBtn.isOpen && categoryBtn.name === "znacka" && <Category />}
					</div>

					<div className="category--wrapper">
						<button
							className="btn--category"
							onClick={(e) => handleCategoryClick(e, "cena")}
						>
							Cena
							<ArrowDownIcon />
						</button>
						{categoryBtn.isOpen && categoryBtn.name === "cena" && <Category />}
					</div>

					<div className="category--wrapper">
						<button
							className="btn--category"
							onClick={(e) => handleCategoryClick(e, "stav")}
						>
							Stav
							<ArrowDownIcon />
						</button>
						{categoryBtn.isOpen && categoryBtn.name === "stav" && <Category />}
					</div>
				</div>
			</div>
			<div className="tags"></div>
		</div>
	);
};

export default SearchConsole;
