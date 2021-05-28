import React, { useContext, useState } from "react";
import { Redirect } from "react-router";
import { AppContext } from "../../context";
import "./Registration.scss";

const Registration = () => {
	const { dispatchUser, userState } = useContext(AppContext);
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMsg, setErrorMsg] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		setErrorMsg("");

		const result = await fetch(`http://localhost:3100/api/user/register`, {
			method: "POST",
			body: JSON.stringify({ username, email, password }),
			headers: {
				"Content-Type": "application/json",
			},
		});

		const data = await result.json();

		if (result.status !== 200) {
			setErrorMsg(data.error);
		} else {
			dispatchUser({ type: "REGISTER_USER", payload: data });
			<Redirect to="/" />;
		}
	};

	if (userState.username) return <Redirect to="/ucet" />;

	return (
		<div className="Registration container">
			<form className="registration-form" onSubmit={(e) => handleSubmit(e)}>
				<h2>Registrace</h2>
				<p className="warning-msg">{errorMsg}</p>
				<div className="form-control">
					<label htmlFor="username">uživatelské jméno</label>
					<input
						type="username"
						name="username"
						id="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="email">email</label>
					<input
						type="email"
						name="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="password">heslo</label>
					<input
						type="password"
						name="password"
						id="password"
						value={password}
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
