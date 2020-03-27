import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './scss/app';

import Home from './Components/Home'
import Navigation from './Components/Navigation';
import Admin from './Components/Admin';
import Compose from './Components/Compose';
import Details from './Components/Details';


// In this lab, down below I converted a class-based component into a functional component

const App: React.FC<AppProps> = () => {


	return (
		<BrowserRouter>
			<Navigation />

			<Switch>
				<Route exact path="/" component={Home}>
					<Home />
				</Route>
				{/* <Route exact path="/navigation/:id" component={Navigation}>
						<Navigation />
					</Route> */}
				<Route exact path="/details/:id" component={Details}>
					<Details />
				</Route>
				<Route exact path="/admin/:id" component={Admin}>
					<Admin />
				</Route>
				<Route exact path="/compose" component={Compose}>
					<Compose />
				</Route>
			</Switch>

		</BrowserRouter>

	);
}

export interface AppProps { }

export interface IAppState {
	name: string;
}

export default App;
