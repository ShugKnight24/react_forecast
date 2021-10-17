import { FC, useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import {
	CurrentTemperature,
	FiveDayForecast
} from '../Pages';
import {
	getCurrentTemperatureByGeoCoordinates,
	getFiveDayForecastByGeoCoordinates
} from '../../Services/WeatherService';

export const Main: FC = () => {
	const [currentForecast, setCurrentForecast] = useState<any>(null);
	const [currentTemperature, setCurrentTemperature] = useState<any>(null);

	useEffect(() => {
		const fetchWeatherData = () => {
			navigator.geolocation.getCurrentPosition((position) => {
				getFiveDayForecastByGeoCoordinates(position.coords.latitude, position.coords.longitude)
					.then(response => setCurrentForecast(response.list));
				getCurrentTemperatureByGeoCoordinates(position.coords.latitude, position.coords.longitude)
					.then(response => setCurrentTemperature(response));
			})
		}

		fetchWeatherData();
	}, []);

	return (
		<Switch>
			<Route exact path="/" >
				<CurrentTemperature
					currentTemperature={currentTemperature}
				/>
			</Route>
			<Route path="/forecast">
				<FiveDayForecast
					currentForecast={currentForecast}
				/>
			</Route>
		</Switch>
	);
};
