import React from "react";
import "./SingleProduct.scss";
import Gallery from "./Gallery/Gallery";
import { useFetch } from "../../custom hooks";
import { HeartIcon } from "../../components/Icons/Icons";

const SingleProduct = ({ match }) => {
	const id = match.params.id;
	const predmet = useFetch(`http://localhost:3100/api/items/${id}`, {});

	if (!predmet) {
		return (
			<main className="SingleProduct">
				<div className="container">Zboží nenalezeno</div>
			</main>
		);
	}

	return (
		<main className="SingleProduct">
			<div className="container flex">
				<Gallery predmet={predmet} />
				<section className="details">
					<h1>{predmet.znacka}</h1>

					<div className="details__wrapper">
						<div className="details__title">CENA</div>
						<div className="details__value details__value--price">
							{predmet.cena} Kč
						</div>
					</div>
					<div className="details__wrapper">
						<div className="details__title">STAV</div>
						<div className="details__value">{predmet.stav}</div>
					</div>
					<div className="details__wrapper">
						<div className="details__title">VELIKOST</div>
						<div className="details__value">{predmet.velikost}</div>
					</div>
					<div className="details__wrapper">
						<div className="details__title">BARVA</div>
						<div className="details__value">{predmet.barva}</div>
					</div>
					<div className="details__wrapper--col">
						<div className="details__title py-1">POPIS</div>
						<div className="details__value">
							<p className="details__description">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
								architecto repellendus possimus tempore odit necessitatibus, rerum,
								obcaecati optio placeat earum excepturi eum vitae explicabo ipsa?
							</p>
						</div>
					</div>
					<div className="details__wrapper py-2 flex-ac">
						<button className="btn">Napsat prodávajícímu</button>

						<div className="details__heart">
							<HeartIcon size={24} isLiked={false} />
						</div>
					</div>
				</section>
			</div>
		</main>
	);
};

export default SingleProduct;
