import React from "react";
import "./Card.scss";
import { getURLfriendlyString } from "../../utils";
import { HeartIcon } from "../Icons/Icons";
import { Link } from "react-router-dom";

const Card = ({ predmet }) => {
	return (
		<article className="Card">
			<div className="content">
				<header>
					<Link
						to={`/${getURLfriendlyString(predmet.pohlavi)}/${getURLfriendlyString(
							predmet.typ
						)}/${predmet.item_id}`}
					>
						<h3>{predmet.znacka}</h3>
					</Link>
				</header>
				<div className="image-container">
					<img src={predmet.thumbnail} alt="" />
				</div>
				<div className="labels">
					<div className="legend-container">
						<div className="price">{predmet.cena} Kč</div>
						<div className="size">{predmet.velikost}</div>
						<div className="color">{predmet.barva}</div>
					</div>
					<HeartIcon size={20} isLiked={predmet.liked === 1} />
				</div>
			</div>
		</article>
	);
};

export default Card;
