import React, { useState } from "react";
import Search from "../Search/Search";
import "./Navbar.scss";

const Navbar = () => {
	return (
		<header className="Navbar">
			<div className="flex flex-sb flex-fe container py-2 px-2">
				<div className="logo">ZDRUHYRUKY</div>
				<Search />
				<button className="btn btn-login">Přihlásit</button>
			</div>
			<nav className="container py-2 px-2">
				<ul>
					<li>Ženy</li>
					<li>Muži</li>
					<li>Děti</li>
				</ul>
				<ul>
					<li>O nás</li>
					<li>FAQ</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
