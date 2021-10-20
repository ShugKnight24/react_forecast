import { FC } from 'react';
import { getCurrentWeatherIcon } from '../../Services/WeatherService';

interface ThreeHourForecastProps {
	forecastPeriod: Date;
	maxTemperature: number;
	minTemperature: number;
	temperatureIcon: string;
	temperatureValue: number;
	weatherDescription: string;
}

export const ThreeHourForecast: FC<ThreeHourForecastProps> = (props) => {
	const {
		forecastPeriod,
		maxTemperature,
		minTemperature,
		temperatureIcon,
		temperatureValue,
		weatherDescription
	} = props;
	const iconURL = getCurrentWeatherIcon(temperatureIcon);
	return(
		<div className="current-temperature-container">
			<h2>Forecast for {forecastPeriod}</h2>
			<div className="current-temp-info">
				<p>
					Description: {weatherDescription}
					<span>
						<img
							src={iconURL}
							alt="Current Weather Icon"
						/>
					</span>
				</p>
			</div>
			<ul>
				<li>Expected Temperature: {temperatureValue}&deg;F</li>
				<li>Expected High: {maxTemperature}&deg;F</li>
				<li>Expected Low: {minTemperature}&deg;F</li>
			</ul>
		</div>
	);
};