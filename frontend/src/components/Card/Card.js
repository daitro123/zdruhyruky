import React from "react";
import "./Card.scss";
import HeartIcon from "../HeartIcon/HeartIcon";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
	return (
		<article className="Card">
			<div className="content">
				<header>
					<Link to={`/${product.id}`}>
						<h3>{product.brand}</h3>
					</Link>
				</header>
				<div className="image-container">
					<img src={product.images[0]} alt="" />
				</div>
				<div className="labels">
					<div className="legend-container">
						<div className="price">{product.price} Kč</div>
						<div className="size">{product.size}</div>
						<div className="color">{product.color}</div>
					</div>
					<HeartIcon size={20} isLiked={false} />
				</div>
			</div>
		</article>
	);
};

export default Card;
