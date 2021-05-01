import React, { useContext } from "react";
import { AppContext } from "../../context";
import Card from "../Card/Card";
import "./List.scss";

const List = () => {
	const { products } = useContext(AppContext);

	return (
		<section className="List container">
			{products.map((product) => {
				return <Card key={product.id} product={product} />;
			})}
		</section>
	);
};

export default List;
