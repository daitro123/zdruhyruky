import React, { useState } from "react";
import "./Registration.scss";

const Registration = () => {
	const [nickname, setNickname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMsg, setErrorMsg] = useState("");

	return (
		<div className="Registration container">
			<form className="registration-form">
				<h2>Registrace</h2>
				<p className="warning-msg">{errorMsg}</p>
				<div className="form-control">
					<label htmlFor="nickname">uživatelské jméno</label>
					<input
						type="nickname"
						name="nickname"
						id="nickname"
						onChange={(e) => setNickname(e.target.value)}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="email">email</label>
					<input
						type="email"
						name="email"
						id="email"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="password">heslo</label>
					<input
						type="password"
						name="password"
						id="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button className="btn btn--green">Registrovat se</button>
				<p className="registration-terms">
					Registrací potvrzuji, že přijímám Všeobecné obchodní podmínky ZDRUHERUKY a že
					jsem četl/a Zásady ochrany soukromí. Potvrzuji také, že už mi bylo 18 let.
				</p>
			</form>
		</div>
	);
};

export default Registration;
