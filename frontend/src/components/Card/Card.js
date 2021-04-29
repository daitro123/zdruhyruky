import React from "react";
import "./Card.scss";

const Card = ({ product }) => {
	return (
		<article className="Card">
			<div className="content">
				<header>
					<h3>{product.brand}</h3>
				</header>
				<div className="image-container">
					<img src={product.image} alt="" />
				</div>
				<div className="size">{product.size}</div>
				<div className="color">{product.color}</div>
			</div>
		</article>
	);
};

export default Card;
