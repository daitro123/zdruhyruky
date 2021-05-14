import "./App.scss";
import React from "react";
import { AppProvider } from "./context";
import Navbar from "./components/Nav/Navbar";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import SelectionPage from "./pages/SelectionPage/SelectionPage";

function App() {
	return (
		<AppProvider>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/login" component={Login} />
					<Route path="/registration" component={Registration} />
					<Route path="/predmety" component={SelectionPage} />
					<Route path={"/:pohlavi/:druh/:id"} component={SingleProduct} />
					<Route path="/:pohlavi/:druh" component={SelectionPage} />
					<Route path="/:pohlavi" component={SelectionPage} />
					<Route path="/*" component={Error} />
				</Switch>
			</Router>
		</AppProvider>
	);
}

export default App;
