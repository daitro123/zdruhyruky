import React, { useState, useRef, useEffect } from "react";
import Search from "../Search/Search";
import "./Navbar.scss";

const Navbar = () => {
	const [catalog, setCatalog] = useState({ isOpen: false, name: "deti" });
	const refLinks = useRef(null);

	// close catalog if user clicks outside of it
	useEffect(() => {
		const handleOutsideClick = (e) => {
			if (!e.target.closest(".catalog") && !refLinks.current.contains(e.target)) {
				setCatalog({ ...catalog, isOpen: false });
			}
		};
		document.addEventListener("mousedown", handleOutsideClick);
		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, [catalog]);

	const handleOpenCatalog = (e, name) => {
		if (catalog.name !== e.target.dataset.name) {
			setCatalog({ isOpen: true, name: name });
		} else {
			setCatalog({ isOpen: !catalog.isOpen, name: name });
		}
	};

	const categories = {
		zeny: [
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
		muzi: ["Kalhoty", "Doplňky", "Trika", "Košile"],
		deti: ["Mikiny"],
	};

	return (
		<header className="Navbar">
			<div className="flex flex-sb flex-fe container ">
				<div className="logo">ZDRUHYRUKY</div>
				<Search />
				<button className="btn btn-login">Přihlásit</button>
			</div>
			<nav className="container">
				<ul className="catalog-links" ref={refLinks}>
					<li
						onClick={(e) => handleOpenCatalog(e, "zeny")}
						data-name="zeny"
						className={catalog.isOpen && catalog.name === "zeny" ? "catalog-shown" : ""}
					>
						Ženy
					</li>
					<li
						onClick={(e) => handleOpenCatalog(e, "muzi")}
						data-name="muzi"
						className={catalog.isOpen && catalog.name === "muzi" ? "catalog-shown" : ""}
					>
						Muži
					</li>
					<li
						onClick={(e) => handleOpenCatalog(e, "deti")}
						data-name="deti"
						className={catalog.isOpen && catalog.name === "deti" ? "catalog-shown" : ""}
					>
						Děti
					</li>
				</ul>
				<div className={`catalog ${catalog.isOpen ? "is-shown" : ""}`}>
					<ul>
						{categories[catalog.name].map((category, index) => {
							return <li key={index}>{category}</li>;
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
