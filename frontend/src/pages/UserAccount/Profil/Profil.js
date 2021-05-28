import React from "react";
import "./Profil.scss";

const Profil = () => {
	return (
		<section className="Profil">
			<h1>Profil uživatele</h1>
			<div className="portrait-container">
				<img
					className="portrait"
					src="https://www.postcardfromholland.com/portrait_small.jpg"
					alt=""
				/>
			</div>
			<div className="user-details">
				<div className="user-detail username">
					<span className="user-details--label">Name</span>
					<p>Jane Doe</p>
				</div>
				<div className="user-detail email">
					<span className="user-details--label">Email</span>
					<p>jane.doe@where.cz</p>
				</div>
				<div className="user-detail email">
					<span className="user-details--label">Email</span>
					<p>jane.doe@where.cz</p>
				</div>
			</div>
		</section>
	);
};

export default Profil;
