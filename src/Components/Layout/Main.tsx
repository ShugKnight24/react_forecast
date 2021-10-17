import { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import {
	CurrentTemperature,
	FiveDayForecast
} from '../Pages';

export const Main: FC = () => (
	<Switch>
		<Route exact path="/" component={ CurrentTemperature } />
		<Route path="/about" component={ FiveDayForecast } />
	</Switch>
);
