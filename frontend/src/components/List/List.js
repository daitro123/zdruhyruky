import React, { useContext } from "react";
import { AppContext } from "../../context";
import Card from "../Card/Card";
import "./List.scss";

const List = ({ predmety }) => {
	return (
		<section className="List container">
			{predmety.map((predmet) => {
				return <Card key={predmet.item_id} predmet={predmet} />;
			})}
		</section>
	);
};

export default List;
