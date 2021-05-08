import React, { useState, useEffect } from "react";
import "./Category.scss";
import { colorArr, brands, stavOptions, velikosti } from "../../data";

const Category = ({ type }) => {
	const [znackyArr, setZnacky] = useState([brands]);
	const [znacka, setZnacka] = useState("");
	const [cena, setCena] = useState({ od: "", do: "" });

	useEffect(() => {
		if (!znacka) {
			setZnacky(brands.slice(0, 10));
		} else {
			setZnacky(
				brands.filter(
					(brand) =>
						brand.toLowerCase().substring(0, znacka.length) === znacka.toLowerCase()
				)
			);
		}
	}, [znacka]);

	const getCurrencyFormat = (value) => {
		const convertedValue = Number(value.replace(/\D/g, ""));

		if (convertedValue) {
			return convertedValue.toLocaleString("cs-CS", { currency: "CZK" });
		} else {
			return "";
		}
	};

	// BARVY
	if (type === "barva") {
		return (
			<div className="Category">
				{colorArr.map((barva, index) => {
					return (
						<div className="row" key={index}>
							<div className="checkbox-wrapper">
								<input
									type="checkbox"
									name={`checkbox--color-${index}`}
									id={`checkbox--color-${index}`}
									hidden
								/>
								<label htmlFor={`checkbox--color-${index}`} className="checkmark">
									{barva.name}
								</label>
								<div
									className="color"
									style={{ backgroundColor: `${barva.hex}` }}
								></div>
							</div>
						</div>
					);
				})}
			</div>
		);
	}

	// ZNACKY

	if (type === "znacka") {
		return (
			<div className="Category">
				<div className="row">
					<input
						type="text"
						name="brand"
						id="brand-input"
						placeholder="Hledat"
						onChange={(e) => setZnacka(e.target.value)}
					/>
				</div>
				{znackyArr.map((brand, index) => {
					return (
						<div className="row" key={index}>
							<div className="checkbox-wrapper">
								<input
									type="checkbox"
									name={`checkbox--brand-${index}`}
									id={`checkbox--brand-${index}`}
									hidden
								/>
								<label htmlFor={`checkbox--brand-${index}`} className="checkmark">
									{brand}
								</label>
							</div>
						</div>
					);
				})}
			</div>
		);
	}

	// CENA
	if (type === "cena") {
		return (
			<div className="Category">
				<div className="row">
					<input
						type="text"
						name="cena-od"
						id="cena-od"
						placeholder="Od"
						value={cena.od}
						onChange={(e) =>
							setCena({
								...cena,
								od: getCurrencyFormat(e.target.value),
							})
						}
					/>
					<span>Kč</span>
				</div>
				<div className="row">
					<input
						type="text"
						name="cena-do"
						id="cena-do"
						placeholder="Do"
						value={cena.do}
						onChange={(e) =>
							setCena({
								...cena,
								do: getCurrencyFormat(e.target.value),
							})
						}
					/>
					<span>Kč</span>
				</div>
			</div>
		);
	}

	// VELIKOSTI
	if (type === "velikost") {
		return (
			<div className="Category">
				{velikosti.map((velikost, index) => {
					return (
						<div className="row" key={index}>
							<div className="checkbox-wrapper">
								<input
									type="checkbox"
									name={`checkbox--velikost-${index}`}
									id={`checkbox--velikost-${index}`}
									hidden
								/>
								<label
									htmlFor={`checkbox--velikost-${index}`}
									className="checkmark"
								>
									{velikost}
								</label>
							</div>
						</div>
					);
				})}
			</div>
		);
	}

	// STAV
	if (type === "stav") {
		return (
			<div className="Category">
				{stavOptions.map((option, index) => {
					return (
						<div className="row" key={index}>
							<div className="checkbox-wrapper">
								<input
									type="checkbox"
									name={`checkbox--stav-${index}`}
									id={`checkbox--stav-${index}`}
									hidden
								/>
								<label htmlFor={`checkbox--stav-${index}`} className="checkmark">
									{option}
								</label>
							</div>
						</div>
					);
				})}
			</div>
		);
	}

	return (
		<div className="Category">
			<div className="row">
				<div className="checkbox-wrapper">
					<input type="checkbox" name="checkbox" id="checkbox1" hidden />
					<label htmlFor="checkbox1" className="checkmark">
						Item 1
					</label>
				</div>
			</div>
			<div className="row">
				<div className="checkbox-wrapper">
					<input type="checkbox" name="checkbox" id="checkbox2" hidden />
					<label htmlFor="checkbox2" className="checkmark">
						Item 2
					</label>
				</div>
			</div>
			<div className="row">
				<div className="checkbox-wrapper">
					<input type="checkbox" name="checkbox" id="checkbox3" hidden />
					<label htmlFor="checkbox3" className="checkmark">
						Item 3
					</label>
				</div>
			</div>
		</div>
	);
};

export default Category;
