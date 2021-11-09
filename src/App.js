import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

import './App.css';
import AboutUsPage from './pages/AboutUsPage';
import BrowsePage from './pages/BrowsePage';
import QuestionsPage from './pages/QuestionsPage';

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={LandingPage} />
					<Route path="/about-us" component={AboutUsPage} />
					<Route path="/browse" component={BrowsePage} />

					{/* TODO: Dynamic path*/}
					<Route path="/question" component={QuestionsPage} />

					{/* TODO: 404 not found */}
					<Route path="/" component={LandingPage} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;
