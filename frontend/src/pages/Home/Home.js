import React from "react";
import "./Home.scss";
import heroImg from "../../img/clothes2.jpg";
import List from "../../components/List/List";
import { useFetch } from "../../custom hooks";

const Home = () => {
	const predmety = useFetch(`http://localhost:3100/items`, {});

	if (!predmety) {
		return (
			<main className="Home">
				<section className="hero">
					<div className="container flex flex-ac h-50vh px-2">
						<h2 className="hero__text">Udělejme si radost společně</h2>
					</div>
				</section>
				<div>LOADING</div>
			</main>
		);
	}

	return (
		<main className="Home">
			<section className="hero">
				<div className="container flex flex-ac h-50vh px-2">
					<h2 className="hero__text">Udělejme si radost společně</h2>
				</div>
			</section>
			<List predmety={predmety.result} />
		</main>
	);
};

export default Home;
