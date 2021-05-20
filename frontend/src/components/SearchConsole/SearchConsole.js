import React, { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowDownIcon } from "../Icons/Icons";
import AttributeMenu from "./AttributeMenu";
import { useCheckForClickOutside, useCloseWindowOnEsc } from "../../custom hooks";
import "./SearchConsole.scss";

const SearchConsole = () => {
	const { pohlavi, druh } = useParams();
	const [attributeBtn, setAttributeBtn] = useState({ isOpen: false, name: "" });
	const attributeBtns = useRef(null); // el container for all attribute buttons

	// close attribute window if user clicks outside of it
	useCheckForClickOutside(attributeBtns, ".attributes", attributeBtn, setAttributeBtn);

	//close attribute window on escape key press
	useCloseWindowOnEsc(attributeBtn, setAttributeBtn);

	// handles opening and closing of attributes popup windows
	const handleAttributeBtnClick = (e, name) => {
		if (attributeBtn.name !== name) {
			setAttributeBtn({ isOpen: true, name: name });
		} else {
			setAttributeBtn({ isOpen: !attributeBtn.isOpen, name: name });
		}
	};

	return (
		<div className="SearchConsole container">
			<div className="console">
				<div className="attributes" ref={attributeBtns}>
					<div className="attribute--wrapper">
						<button
							className="btn--attribute"
							onClick={(e) => handleAttributeBtnClick(e, "katalog")}
						>
							Katalog
							<ArrowDownIcon />
						</button>
						{attributeBtn.isOpen && attributeBtn.name === "katalog" && (
							<AttributeMenu />
						)}
					</div>

					<div className="attribute--wrapper">
						<button
							className="btn--attribute"
							onClick={(e) => handleAttributeBtnClick(e, "velikost")}
						>
							Velikost
							<ArrowDownIcon />
						</button>
						{attributeBtn.isOpen && attributeBtn.name === "velikost" && (
							<AttributeMenu attributeType="velikost" />
						)}
					</div>

					<div className="attribute--wrapper">
						<button
							className="btn--attribute"
							onClick={(e) => handleAttributeBtnClick(e, "barva")}
						>
							Barva
							<ArrowDownIcon />
						</button>
						{attributeBtn.isOpen && attributeBtn.name === "barva" && (
							<AttributeMenu attributeType="barva" />
						)}
					</div>

					<div className="attribute--wrapper">
						<button
							className="btn--attribute"
							onClick={(e) => handleAttributeBtnClick(e, "znacka")}
						>
							Značka
							<ArrowDownIcon />
						</button>
						{attributeBtn.isOpen && attributeBtn.name === "znacka" && (
							<AttributeMenu attributeType="znacka" />
						)}
					</div>

					<div className="attribute--wrapper">
						<button
							className="btn--attribute"
							onClick={(e) => handleAttributeBtnClick(e, "cena")}
						>
							Cena
							<ArrowDownIcon />
						</button>
						{attributeBtn.isOpen && attributeBtn.name === "cena" && (
							<AttributeMenu attributeType="cena" />
						)}
					</div>

					<div className="attribute--wrapper">
						<button
							className="btn--attribute"
							onClick={(e) => handleAttributeBtnClick(e, "stav")}
						>
							Stav
							<ArrowDownIcon />
						</button>
						{attributeBtn.isOpen && attributeBtn.name === "stav" && (
							<AttributeMenu attributeType="stav" />
						)}
					</div>
				</div>
			</div>
			<div className="tags"></div>
		</div>
	);
};

export default SearchConsole;
