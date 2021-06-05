import React, { useState, useContext } from "react";
import { AppContext } from "../../../context";
import "./Profil.scss";

const Profil = () => {
	const { userState } = useContext(AppContext);

	return (
		<section className="Profil">
			<h2>{userState.username}</h2>
			<div className="portrait-container">
				<img className="portrait" src={userState.portrait} alt="" />
			</div>
			<div className="user-details">
				<div className="user-detail username">
					<span className="user-details--label">Jméno</span>
					<p>{userState.full_name}</p>
				</div>
				<div className="user-detail email">
					<span className="user-details--label">Email</span>
					<p>{userState.email}</p>
				</div>
				<div className="user-detail">
					<div className="description">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
							accusamus consequatur minus! Eius distinctio eaque officia, aperiam
							eveniet sed quod dolorem? Error, nemo totam. Perferendis.
						</p>
						<ul>
							<li>Lorem, ipsum.</li>
							<li>Lorem ipsum dolor sit amet.</li>
							<li>Lorem ipsum dolor sit.</li>
							<li>Lorem, ipsum dolor.</li>
							<li>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
								odit!
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Profil;
