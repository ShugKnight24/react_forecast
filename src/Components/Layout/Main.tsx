import { FC, useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import {
	CurrentTemperaturePage,
	FiveDayForecastPage
} from '../Pages';
import {
	getCurrentTemperatureByGeoCoordinates,
	getFiveDayForecastByGeoCoordinates
} from '../../Services/WeatherService';
import { CurrentTemperatureResponse } from '../../Types/ApiResponses/CurrentTemperature';
import { List } from '../../Types/ApiResponses/FiveDayForecast';

export const Main: FC = () => {
	const [currentForecastData, setCurrentForecastData] = useState<List[] | null>(null);
	const [currentTemperatureData, setCurrentTemperatureData] = useState<CurrentTemperatureResponse | null>(null);

	useEffect(() => {
		const fetchWeatherData = () => {
			navigator.geolocation.getCurrentPosition((position) => {
				getFiveDayForecastByGeoCoordinates(
					position.coords.latitude,
					position.coords.longitude,
					'&units=imperial'
				).then(response => setCurrentForecastData(response.list));
				getCurrentTemperatureByGeoCoordinates(
					position.coords.latitude,
					position.coords.longitude,
					'&units=imperial'
				).then(response => setCurrentTemperatureData(response));
			})
		}

		fetchWeatherData();
	}, []);

	return (
		<Switch>
			<Route exact path="/" >
				<CurrentTemperaturePage
					currentTemperature={currentTemperatureData}
				/>
			</Route>
			<Route path="/forecast">
				<FiveDayForecastPage
					currentForecast={currentForecastData}
				/>
			</Route>
		</Switch>
	);
};
