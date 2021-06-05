import React, { useContext, useState, useEffect } from "react";
import "./UserAccount.scss";
import { Redirect } from "react-router";
import { AppContext } from "../../context";
import Profil from "./Profil/Profil";
import NabizenePredmety from "./NabizenePredmety/NabizenePredmety";
import Oblibene from "./Oblibene/Oblibene";
import Zpravy from "./Zpravy/Zpravy";

const UserAccount = () => {
	const { userState, dispatchUser } = useContext(AppContext);
	const [component, setComponent] = useState("profil");

	const getComponent = (componentName) => {
		switch (componentName) {
			case "profil":
				return <Profil />;
			case "nabizene_predmety":
				return <NabizenePredmety />;
			case "oblibene":
				return <Oblibene />;
			case "zpravy":
				return <Zpravy />;
			default:
				break;
		}
	};

	useEffect(() => {
		if (userState.accessToken) {
			const getUser = async () => {
				try {
					const result = await fetch("http://localhost:3100/api/user/ucet", {
						method: "GET",
						headers: new Headers({
							'Authorization': "Bearer " + userState.accessToken, // prettier-ignore
						}),
					});

					if (result.status !== 200) {
						throw new Error(
							`StatusCode: ${result.status}. Error: ${result.statusText}`
						);
					}

					const data = await result.json();
					dispatchUser({ type: "GET_INFO", payload: data.user[0] });
				} catch (error) {
					dispatchUser({ type: "VERIFICATION_FAILED" });
				}
			};
			getUser();
		}
	}, []);

	if (!userState.isLogged) {
		return <Redirect to="/login" />;
	}

	return (
		<main className="UserAccount container">
			<aside className="py-2 px-2">
				<ul>
					<li>
						<button onClick={() => setComponent("profil")}>Profil</button>
					</li>
					<li>
						<button onClick={() => setComponent("nabizene_predmety")}>
							Nabízené předměty
						</button>
					</li>
					<li>
						<button onClick={() => setComponent("oblibene")}>Oblíbené</button>
					</li>
					<li>
						<button onClick={() => setComponent("zpravy")}>Zprávy</button>
					</li>
				</ul>
			</aside>
			<>{getComponent(component)}</>
		</main>
	);
};

export default UserAccount;
