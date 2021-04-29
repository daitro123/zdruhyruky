import React, { useState, useRef, useEffect } from "react";
import Search from "../Search/Search";
import "./Navbar.scss";

const Navbar = () => {
	const [isCatalog, setIsCatalog] = useState(false);

	// close catalog if user clicks outside of it
	useEffect(() => {
		const handleOutsideClick = (e) => {
			if (!e.target.closest(".catalog")) {
				setIsCatalog(false);
			}
		};
		document.addEventListener("mousedown", handleOutsideClick);
	}, []);

	return (
		<header className="Navbar">
			<div className="flex flex-sb flex-fe container py-2 px-2">
				<div className="logo">ZDRUHYRUKY</div>
				<Search />
				<button className="btn btn-login">Přihlásit</button>
			</div>
			<nav className="container py-2 px-2">
				<ul>
					<li onClick={() => setIsCatalog(!isCatalog)}>Ženy</li>
					<li onClick={() => setIsCatalog(!isCatalog)}>Muži</li>
					<li onClick={() => setIsCatalog(!isCatalog)}>Děti</li>
				</ul>
				<ul>
					<li>O nás</li>
					<li>FAQ</li>
				</ul>

				<div className={`catalog ${isCatalog && "is-shown"}`}>
					<ul>
						<li>Vše</li>
						<li>Doplňky</li>
						<li>Kalhoty</li>
						<li>Trika</li>
						<li>Košile</li>
						<li>Overaly</li>
						<li>Spodní prádlo</li>
						<li>Sportovní oblečení</li>
						<li>Kostými a saka</li>
						<li>Kraťasy</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
