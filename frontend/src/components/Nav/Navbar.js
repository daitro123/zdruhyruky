import React, { useState, useRef, useContext } from "react";
import getURLfriendlyString from "../../utils";
import Search from "../Search/Search";
import { Link } from "react-router-dom";
import { useCheckForClickOutside, useCloseWindowOnEsc } from "../../custom hooks";
import "./Navbar.scss";
import { AppContext } from "../../context";

const Navbar = () => {
	const [catalog, setCatalog] = useState({ isOpen: false, name: "děti" });
	const refLinks = useRef(null);
	const { selectedAttributes, setSelectedAttributes } = useContext(AppContext);

	// close catalog window if user clicks outside of it
	useCheckForClickOutside(refLinks, ".catalog", catalog, setCatalog);

	// close popup catalog window on escape key press
	useCloseWindowOnEsc(catalog, setCatalog);

	// handles opening and closing of catalog popup, also position of the catalog window
	const handleOpenCatalog = (e, name) => {
		if (catalog.name !== name) {
			setCatalog({ isOpen: true, name: name });
		} else {
			setCatalog({ isOpen: !catalog.isOpen, name: name });
		}

		//move position of catalog
		const ulXPos = refLinks.current.getBoundingClientRect().x;
		const linkXPos = e.target.getBoundingClientRect().x;
		document.querySelector(".catalog").style.transform = `translateX(${linkXPos - ulXPos}px)`;
	};

	const handleSelection = (type) => {
		setCatalog({ ...catalog, isOpen: false });

		// update global context when clicked on item in catalog popup window
		setSelectedAttributes({
			...selectedAttributes,
			selectedPohlavi: catalog.name,
			selectedTyp: type,
		});
	};

	const attributes = {
		ženy: [
			"Doplňky",
			"Kalhoty",
			"Trika",
			"Košile",
			"Overaly",
			"Spodní prádlo",
			"Sportovní oblečení",
			"Kostými a saka",
			"Kraťasy",
		],
		muži: ["Kalhoty", "Doplňky", "Trika", "Košile"],
		děti: ["Mikiny"],
	};

	return (
		<header className="Navbar">
			<div className="flex flex-sb flex-fe container ">
				<div className="logo">
					<Link to="/">ZDRUHYRUKY</Link>
				</div>
				<Search />
				<Link to="/login" className="btn btn-login">
					Přihlásit
				</Link>
			</div>
			<nav className="container">
				<ul className="catalog-links" ref={refLinks}>
					<li
						onClick={(e) => handleOpenCatalog(e, "ženy")}
						className={catalog.isOpen && catalog.name === "ženy" ? "catalog-shown" : ""}
					>
						ženy
					</li>
					<li
						onClick={(e) => handleOpenCatalog(e, "muži")}
						className={catalog.isOpen && catalog.name === "muži" ? "catalog-shown" : ""}
					>
						muži
					</li>
					<li
						onClick={(e) => handleOpenCatalog(e, "děti")}
						className={catalog.isOpen && catalog.name === "děti" ? "catalog-shown" : ""}
					>
						děti
					</li>
				</ul>
				<div className={`catalog ${catalog.isOpen ? "is-shown" : ""}`}>
					{/* Render types for catalog popup */}
					<ul>
						{attributes[catalog.name].map((type, index) => {
							return (
								<li key={index}>
									<Link
										to={`/${getURLfriendlyString(
											catalog.name
										)}/${getURLfriendlyString(type)}`}
										onClick={(e) => handleSelection(type)}
									>
										{type}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
				<ul>
					<li>O nás</li>
					<li>FAQ</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
