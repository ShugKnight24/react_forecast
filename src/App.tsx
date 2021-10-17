import { FC } from 'react';
import { Router } from 'react-router-dom';
import {
	Content,
	Footer,
	Header,
	Layout,
	Main
} from './Components/Layout';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export const App : FC = () => (
	<div className="weather-app">
		<Router history={ history }>
			<Layout>
				<Header
					title={'React Weather App'}
				/>
				<Content>
					<Main />
					<Footer />
				</Content>
			</Layout>
		</Router>
	</div>
);
