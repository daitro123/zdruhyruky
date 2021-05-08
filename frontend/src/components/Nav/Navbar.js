import React, { useState, useRef, useEffect } from "react";
import getURLfriendlyString from "../../utils";
import Search from "../Search/Search";
import { Link } from "react-router-dom";
import { useCheckForClickOutside, useCloseWindowOnEsc } from "../../custom hooks";
import "./Navbar.scss";

const Navbar = () => {
	const [catalog, setCatalog] = useState({ isOpen: false, name: "Děti" });
	const refLinks = useRef(null);

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

	const categories = {
		Ženy: [
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
		Muži: ["Kalhoty", "Doplňky", "Trika", "Košile"],
		Děti: ["Mikiny"],
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
						onClick={(e) => handleOpenCatalog(e, "Ženy")}
						className={catalog.isOpen && catalog.name === "Ženy" ? "catalog-shown" : ""}
					>
						Ženy
					</li>
					<li
						onClick={(e) => handleOpenCatalog(e, "Muži")}
						className={catalog.isOpen && catalog.name === "Muži" ? "catalog-shown" : ""}
					>
						Muži
					</li>
					<li
						onClick={(e) => handleOpenCatalog(e, "Děti")}
						className={catalog.isOpen && catalog.name === "Děti" ? "catalog-shown" : ""}
					>
						Děti
					</li>
				</ul>
				<div className={`catalog ${catalog.isOpen ? "is-shown" : ""}`}>
					{/* Render types for catalog popup */}
					<ul>
						{categories[catalog.name].map((type, index) => {
							return (
								<li key={index}>
									<Link
										to={`/${getURLfriendlyString(
											catalog.name
										)}/${getURLfriendlyString(type)}`}
										onClick={(e) => setCatalog({ ...catalog, isOpen: false })}
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
