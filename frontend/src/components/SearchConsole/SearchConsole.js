import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowDownIcon } from "../Icons/Icons";
import Category from "./Category";
import { useCheckForClickOutside, useCloseWindowOnEsc } from "../../custom hooks";
import "./SearchConsole.scss";

const SearchConsole = ({ gender, type }) => {
	const [categoryBtn, setCategoryBtn] = useState({ isOpen: false, name: "" });
	const categoryButtons = useRef(null);

	// close category window if user clicks outside of it
	useCheckForClickOutside(categoryButtons, ".categories", categoryBtn, setCategoryBtn);

	//close category window on escape key press
	useCloseWindowOnEsc(categoryBtn, setCategoryBtn);

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
					<Link to="/">home</Link> / <Link to={`/${gender}`}>{gender}</Link>{" "}
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
						{categoryBtn.isOpen && categoryBtn.name === "velikost" && (
							<Category type="velikost" />
						)}
					</div>

					<div className="category--wrapper">
						<button
							className="btn--category"
							onClick={(e) => handleCategoryClick(e, "barva")}
						>
							Barva
							<ArrowDownIcon />
						</button>
						{categoryBtn.isOpen && categoryBtn.name === "barva" && (
							<Category type="barva" />
						)}
					</div>

					<div className="category--wrapper">
						<button
							className="btn--category"
							onClick={(e) => handleCategoryClick(e, "znacka")}
						>
							Značka
							<ArrowDownIcon />
						</button>
						{categoryBtn.isOpen && categoryBtn.name === "znacka" && (
							<Category type="znacka" />
						)}
					</div>

					<div className="category--wrapper">
						<button
							className="btn--category"
							onClick={(e) => handleCategoryClick(e, "cena")}
						>
							Cena
							<ArrowDownIcon />
						</button>
						{categoryBtn.isOpen && categoryBtn.name === "cena" && (
							<Category type="cena" />
						)}
					</div>

					<div className="category--wrapper">
						<button
							className="btn--category"
							onClick={(e) => handleCategoryClick(e, "stav")}
						>
							Stav
							<ArrowDownIcon />
						</button>
						{categoryBtn.isOpen && categoryBtn.name === "stav" && (
							<Category type="stav" />
						)}
					</div>
				</div>
			</div>
			<div className="tags"></div>
		</div>
	);
};

export default SearchConsole;
