import React, { useState, useEffect, useContext } from "react";
import "./AttributeMenu.scss";
import { AppContext } from "../../context";
import { colorArr, brands, stavOptions, velikosti, druhy } from "../../data";
import { ArrowRightIcon, ArrowLeftIcon } from "../Icons/Icons";

const AttributeMenu = ({ type }) => {
	const { selectedAttributes, setSelectedAttributes } = useContext(AppContext);
	const [znackyVyber, setZnackyVyber] = useState([brands]);
	const [znackaInput, setZnackaInput] = useState("");
	const [cena, setCena] = useState({ od: "", do: "" });
	const [gender, setGender] = useState("");

	useEffect(() => {
		if (!znackaInput) {
			setZnackyVyber(brands.slice(0, 10));
		} else {
			setZnackyVyber(
				brands.filter(
					(brand) =>
						brand.toLowerCase().substring(0, znackaInput.length) ===
						znackaInput.toLowerCase()
				)
			);
		}
	}, [znackaInput]);

	const getCurrencyFormat = (value) => {
		const convertedValue = Number(value.replace(/\D/g, "")); // converts user input to number (regex removes all non-digit chars)

		if (convertedValue) {
			return convertedValue.toLocaleString("cs-CS", { currency: "CZK" });
		} else {
			return "";
		}
	};

	const handleCheckbox = (e, type, value) => {
		const typeSelected = `selected${type[0].toUpperCase() + type.slice(1)}`; // get the correct Obj.key of state (selected...: value)

		if (e.target.checked) {
			// if checked add to state
			setSelectedAttributes({
				...selectedAttributes,
				[typeSelected]: [...selectedAttributes[typeSelected], value],
			});
		} else {
			// if unchecked remove from state
			const filteredArray = selectedAttributes[typeSelected].filter(
				(selected) => selected !== value
			);
			setSelectedAttributes({
				...selectedAttributes,
				[typeSelected]: [...filteredArray],
			});
		}
	};

	// BARVY
	if (type === "barva") {
		return (
			<div className="AttributeMenu">
				{colorArr.map((barva, index) => {
					return (
						<div className="row" key={index}>
							<div className="checkbox-wrapper">
								<input
									type="checkbox"
									name={`checkbox--color-${index}`}
									id={`checkbox--color-${index}`}
									onChange={(e) => {
										handleCheckbox(e, "barva", barva.name);
									}}
									checked={selectedAttributes.selectedBarva.includes(barva.name)}
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
			<div className="AttributeMenu">
				<div className="row">
					<input
						type="text"
						name="brand"
						id="brand-input"
						placeholder="Hledat"
						onChange={(e) => setZnackaInput(e.target.value)}
					/>
				</div>
				{znackyVyber.map((brand, index) => {
					return (
						<div className="row" key={index}>
							<div className="checkbox-wrapper">
								<input
									type="checkbox"
									name={`checkbox--brand-${index}`}
									id={`checkbox--brand-${index}`}
									onChange={(e) => {
										handleCheckbox(e, "znacka", brand);
									}}
									checked={selectedAttributes.selectedZnacka.includes(brand)}
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
			<div className="AttributeMenu">
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
			<div className="AttributeMenu">
				{velikosti.map((velikost, index) => {
					return (
						<div className="row" key={index}>
							<div className="checkbox-wrapper">
								<input
									type="checkbox"
									name={`checkbox--velikost-${index}`}
									id={`checkbox--velikost-${index}`}
									onChange={(e) => {
										handleCheckbox(e, "velikost", velikost);
									}}
									checked={selectedAttributes.selectedVelikost.includes(velikost)}
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
			<div className="AttributeMenu">
				{stavOptions.map((option, index) => {
					return (
						<div className="row" key={index}>
							<div className="checkbox-wrapper">
								<input
									type="checkbox"
									name={`checkbox--stav-${index}`}
									id={`checkbox--stav-${index}`}
									onChange={(e) => {
										handleCheckbox(e, "stav", option);
									}}
									checked={selectedAttributes.selectedStav.includes(option)}
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

	if (!gender) {
		return (
			<div className="AttributeMenu">
				<div className="row pointer" onClick={() => setGender("ženy")}>
					<p>Ženy</p>
					<ArrowRightIcon />
				</div>
				<div className="row pointer" onClick={() => setGender("muži")}>
					<p>Muži</p>
					<ArrowRightIcon />
				</div>
				<div className="row pointer" onClick={() => setGender("děti")}>
					<p>Děti</p>
					<ArrowRightIcon />
				</div>
			</div>
		);
	} else if (gender === "ženy") {
		return <Druhy druhy={druhy.ženy} setGender={setGender} />;
	} else if (gender === "muži") {
		return <Druhy druhy={druhy.muži} setGender={setGender} />;
	} else if (gender === "děti") {
		return <Druhy druhy={druhy.děti} setGender={setGender} />;
	}
};

export default AttributeMenu;

const Druhy = ({ druhy, setGender }) => {
	return (
		<div className="AttributeMenu">
			<div className="row pointer" onClick={() => setGender("")}>
				<div className="flex">
					<ArrowLeftIcon />
					<p className="px-2">Zpět</p>
				</div>
			</div>
			{druhy.map((option, index) => {
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
};
