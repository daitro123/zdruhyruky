import React from "react";
import "./Home.scss";
import heroImg from "../../img/clothes2.jpg";
import List from "../../components/List/List";

const Home = () => {
	return (
		<main className="Home">
			<section className="hero">
				<div className="container flex flex-ac h-50vh px-2">
					<h2 className="hero__text">Udělejme si radost společně</h2>
				</div>
			</section>
			<List />
		</main>
	);
};

export default Home;
