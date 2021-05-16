import React, { useState, useEffect, useContext } from "react";
import "./AttributeMenu.scss";
import { AppContext } from "../../context";
import { colorArr, brands, stavOptions, velikosti, katalogArr } from "../../data";
import { ArrowRightIcon, ArrowLeftIcon } from "../Icons/Icons";
import { useURLParams } from "../../custom hooks";

const AttributeMenu = ({ attributeType }) => {
	const { state, dispatch } = useContext(AppContext);
	const { searchParams } = useURLParams();
	const [gender, setGender] = useState("");

	// state for rendering brands in popup menu
	const [znackyVyber, setZnackyVyber] = useState([brands]);
	const [znackaInput, setZnackaInput] = useState("");

	// controlled input for setting price
	const [cena, setCena] = useState({ od: "", do: "" });

	useEffect(() => {
		//initial render will show first 10 brands from array
		if (!znackaInput) {
			setZnackyVyber(brands.slice(0, 10));
		} else {
			// if user types, it filters matching brands
			setZnackyVyber(
				brands.filter(
					(brand) =>
						brand.toLowerCase().substring(0, znackaInput.length) ===
						znackaInput.toLowerCase()
				)
			);
		}
	}, [znackaInput]);

	// converts price input to correct local format
	const getCurrencyFormat = (value) => {
		const convertedValue = Number(value.replace(/\D/g, "")); // converts to number (regex removes all non-digit chars)

		if (convertedValue) {
			return convertedValue.toLocaleString("cs-CS", { currency: "CZK" });
		} else {
			return "";
		}
	};

	// adds or removes selected (checked) attribute to/from context
	const handleCheckbox = (e, attribute, value) => {
		if (e.target.checked) {
			dispatch({ type: "ADD", attributeType: attribute, value: value });
			// appendQueryToURL(history, attribute, value);
			searchParams.append(attribute, value);
		} else {
			dispatch({ type: "REMOVE", attributeType: attribute, value: value });
			// removeQueryFromURL(history, value);
			searchParams.remove(value);
		}
	};

	const handleSetPrice = (e, attribute, value) => {
		if (e.keyCode === 13) {
			if (value) {
				dispatch({ type: "SET_PRICE", attributeType: attribute, value: value });
				searchParams.removeAll(attribute); // have to remove the previous query first
				searchParams.append(attribute, value);
			} else {
				dispatch({ type: "REMOVE_PRICE", attributeType: attribute });
				searchParams.removeAll(attribute);
			}
		}
	};

	// BARVY
	if (attributeType === "barva") {
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
									checked={state.barva.includes(barva.name)}
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

	if (attributeType === "znacka") {
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
									checked={state.znacka.includes(brand)}
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
	if (attributeType === "cena") {
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
						onKeyDown={(e) => handleSetPrice(e, "cenaOd", cena.od)}
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
						onKeyDown={(e) => handleSetPrice(e, "cenaDo", cena.do)}
					/>
					<span>Kč</span>
				</div>
			</div>
		);
	}

	// VELIKOSTI
	if (attributeType === "velikost") {
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
									checked={state.velikost.includes(velikost)}
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
	if (attributeType === "stav") {
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
									checked={state.stav.includes(option)}
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
	} else {
		return (
			<Druhy
				katalogArr={katalogArr.filter((katalog) => katalog.pohlavi === gender)}
				setGender={setGender}
				state={state}
				dispatch={dispatch}
				handleCheckbox={handleCheckbox}
			/>
		);
	}
};

export default AttributeMenu;

const Druhy = ({ katalogArr, setGender, state, handleCheckbox }) => {
	return (
		<div className="AttributeMenu">
			<div className="row pointer" onClick={() => setGender("")}>
				<div className="flex">
					<ArrowLeftIcon />
					<p className="px-2">Zpět</p>
				</div>
			</div>
			{katalogArr.map((katalog) => {
				return (
					<div className="row" key={katalog.katalogID}>
						<div className="checkbox-wrapper">
							<input
								type="checkbox"
								name={`checkbox--stav-${katalog.katalogID}`}
								id={`checkbox--stav-${katalog.katalogID}`}
								checked={state.katalog.includes(katalog.katalogID)}
								onChange={(e) => {
									handleCheckbox(e, "katalog", katalog.katalogID);
								}}
								hidden
							/>
							<label
								htmlFor={`checkbox--stav-${katalog.katalogID}`}
								className="checkmark"
							>
								{katalog.druh}
							</label>
						</div>
					</div>
				);
			})}
		</div>
	);
};
