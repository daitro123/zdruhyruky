import React from "react";
import "./SingleProduct.scss";
import Gallery from "./Gallery/Gallery";
import { useFetch } from "../../custom hooks";
import HeartIcon from "../../components/HeartIcon/HeartIcon";

const SingleProduct = ({ match }) => {
	const id = match.params.id;

	const item = useFetch(`http://localhost:3100/items/${id}`, {});

	if (!item) {
		return (
			<main className="SingleProduct">
				<div className="container">Zboží nenalezeno</div>
			</main>
		);
	}

	return (
		<main className="SingleProduct">
			<div className="container flex">
				<Gallery item={item} />
				<section className="details">
					<h1>{item.brand}</h1>

					<div className="details__wrapper">
						<div className="details__title">CENA</div>
						<div className="details__value details__value--price">{item.price} Kč</div>
					</div>
					<div className="details__wrapper">
						<div className="details__title">STAV</div>
						<div className="details__value">{item.condition}</div>
					</div>
					<div className="details__wrapper">
						<div className="details__title">VELIKOST</div>
						<div className="details__value">{item.size}</div>
					</div>
					<div className="details__wrapper">
						<div className="details__title">BARVA</div>
						<div className="details__value">{item.color}</div>
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
