import React, { useContext, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { AppContext } from "../../context";
import "./Login.scss";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [errorMsg, setErrorMsg] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const { dispatchUser, userState } = useContext(AppContext);

	useEffect(() => {
		if (userState.accessToken) {
			const checkToken = async () => {
				try {
					const result = await fetch("http://localhost:3100/api/user/login", {
						method: "POST",
						headers: new Headers({
							'Authorization': "Bearer " + userState.accessToken, // prettier-ignore
						}),
					});
					const data = await result.json();
					if (data.accessToken === userState.accessToken) {
						dispatchUser({ type: "VERIFIED" });
					}
				} catch (error) {
					console.log(error);
				}
			};
			checkToken();
		} else {
		}
	}, []);

	const handleLogin = async (e) => {
		e.preventDefault();
		setErrorMsg("");

		const result = await fetch(`http://localhost:3100/api/user/login`, {
			method: "POST",
			body: JSON.stringify({ username, password }),
			headers: new Headers({
				"Content-Type": "application/json",
				'Authorization': "Bearer " + userState.accessToken, // prettier-ignore
			}),
		});

		const data = await result.json();

		if (result.status !== 200) {
			setErrorMsg(data.error);
		} else {
			dispatchUser({ type: "LOGIN_USER", payload: data });
		}
	};

	if (userState.isLogged) {
		return <Redirect to="/ucet" />;
	}

	return (
		<div className="Login container">
			<form className="login-form" onSubmit={(e) => handleLogin(e)}>
				<h2>Přihlášení</h2>
				<p className="warning-msg">{errorMsg}</p>
				<div className="form-control">
					<label htmlFor="username">uživatelské jméno</label>
					<input
						type="username"
						name="username"
						id="username"
						onChange={(e) => setUsername(e.target.value)}
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
				<button className="btn btn--green">Login</button>
				<p className="register-link">
					Nemáte ještě účet? <Link to="/registration">Zaregistrujte se!</Link>
				</p>
			</form>
		</div>
	);
};

export default Login;
