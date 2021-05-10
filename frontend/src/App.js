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
import SearchConsole from "./components/SearchConsole/SearchConsole";
import Selection from "./pages/Selection/Selection";

function App() {
	return (
		<AppProvider>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/login" component={Login} />
					<Route path="/registration" component={Registration} />
					<Route path={"/:gender/:type/:id"} component={SingleProduct} />
					<Route path="/:gender/:type" component={Selection} />
					<Route path="/:gender" component={Selection} />
					<Route path="/*" component={Error} />
				</Switch>
			</Router>
		</AppProvider>
	);
}

export default App;
