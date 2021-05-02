import "./App.scss";
import React from "react";
import { AppProvider } from "./context";
import Navbar from "./components/Nav/Navbar";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";

function App() {
	return (
		<AppProvider>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/login" component={Login} />
					<Route path="/registration" component={Registration} />
					<Route path={"/:id"} component={SingleProduct} />
					<Route path="*" component={Error} />
				</Switch>
			</Router>
		</AppProvider>
	);
}

export default App;
