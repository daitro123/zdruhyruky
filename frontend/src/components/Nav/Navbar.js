import React, { useState, useRef } from "react";
import getURLfriendlyString from "../../utils";
import Search from "../Search/Search";
import { Link } from "react-router-dom";
import { useCheckForClickOutside, useCloseWindowOnEsc } from "../../custom hooks";
import { katalogArr } from "../../data";
import "./Navbar.scss";

const Navbar = () => {
	const [catalogList, setCatalogList] = useState({ isOpen: false, name: "děti" });
	const refLinks = useRef(null);

	// close catalog window if user clicks outside of it
	useCheckForClickOutside(refLinks, ".catalog", catalogList, setCatalogList);

	// close popup catalog window on escape key press
	useCloseWindowOnEsc(catalogList, setCatalogList);

	// handles opening and closing of catalog popup, also position of the catalog window
	const handleOpenCatalog = (e, name) => {
		if (catalogList.name !== name) {
			setCatalogList({ isOpen: true, name: name });
		} else {
			setCatalogList({ isOpen: !catalogList.isOpen, name: name });
		}

		//move position of catalog
		const ulXPos = refLinks.current.getBoundingClientRect().x;
		const linkXPos = e.target.getBoundingClientRect().x;
		document.querySelector(".catalog").style.transform = `translateX(${linkXPos - ulXPos}px)`;
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
						className={
							catalogList.isOpen && catalogList.name === "ženy" ? "catalog-shown" : ""
						}
					>
						ženy
					</li>
					<li
						onClick={(e) => handleOpenCatalog(e, "muži")}
						className={
							catalogList.isOpen && catalogList.name === "muži" ? "catalog-shown" : ""
						}
					>
						muži
					</li>
					<li
						onClick={(e) => handleOpenCatalog(e, "děti")}
						className={
							catalogList.isOpen && catalogList.name === "děti" ? "catalog-shown" : ""
						}
					>
						děti
					</li>
				</ul>
				<div className={`catalog ${catalogList.isOpen ? "is-shown" : ""}`}>
					{/* Render types for catalog popup */}
					<ul>
						{katalogArr
							.filter((katalog) => katalog.pohlavi === catalogList.name) // filter gender catalogs
							.slice(0, 10) // limit size of catalogList to 10 items
							.map((katalog, index) => {
								return (
									<li key={index}>
										<Link
											to={`/predmety?katalog=${katalog.katalogID}`}
											onClick={() =>
												setCatalogList({ ...catalogList, isOpen: false })
											}
										>
											{katalog.druh}
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
