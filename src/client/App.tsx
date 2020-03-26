import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './scss/app';

import App2 from './Components/App2'
import Navigation from './Components/Navigation';

// In this lab, down below I converted a class-based component into a functional component

const App: React.SFC<IAppProps> = props => {


	return (
		<BrowserRouter>
			<main className="container my-5">
				<Switch>
					<Route exact path="/" component={App2} />
					<Route exact path="/:id/navigation" component={Navigation} />

				</Switch>
			</main>
		</BrowserRouter>

	);
}

export interface IAppProps { }

export interface IAppState {
	name: string;
}

export default App;
