import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMsg, setErrorMsg] = useState("");

	return (
		<div className="Login container">
			<form className="login-form">
				<h2>Přihlášení</h2>
				<p className="warning-msg">{errorMsg}</p>
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
				<button className="btn btn--green">Login</button>
				<p className="register-link">
					Nemáte ještě účet? <Link to="/registration">Zaregistrujte se!</Link>
				</p>
			</form>
		</div>
	);
};

export default Login;
