import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './scss/app';

import Home from './Components/Home'
import Navigation from './Components/Navigation';
import Admin from './Components/Admin';
import Compose from './Components/Compose';
import Details from './Components/Details';


// In this lab, down below I converted a class-based component into a functional component

const App: React.SFC<IAppProps> = props => {


	return (
		<BrowserRouter>

			<Switch>
				<Route exact path="/" component={Home}>
					<Home />
				</Route>
				{/* <Route exact path="/navigation/:id" component={Navigation}>
						<Navigation />
					</Route> */}
				<Route exact path="/details" component={Details}>
					<Details />
				</Route>
				<Route exact path="/admin" component={Admin}>
					<Admin />
				</Route>
				<Route exact path="/compose" component={Compose}>
					<Compose />
				</Route>

			</Switch>

		</BrowserRouter>

	);
}

export interface IAppProps { }

export interface IAppState {
	name: string;
}

export default App;
