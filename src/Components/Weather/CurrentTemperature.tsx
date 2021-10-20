import { FC } from 'react';
import { getCurrentWeatherIcon } from '../../Services/WeatherService';

interface CurrentTemperatureProps {
	currentTemperatureIcon: string;
	currentTemperatureValue: number;
	currentWeatherDescription: string;
	locationName: string;
	todaysMaxTemperature: number;
	todaysMinTemperature: number;
}

export const CurrentTemperature: FC<CurrentTemperatureProps> = (props) => {
	const {
		currentTemperatureIcon,
		currentTemperatureValue,
		currentWeatherDescription,
		locationName,
		todaysMaxTemperature,
		todaysMinTemperature
	} = props;
	const iconURL = getCurrentWeatherIcon(currentTemperatureIcon);
	return(
		<div className="current-temperature-container">
			<h1>Current Temperature</h1>
			<div className="current-temp-info">
				<p>
					Description: {currentWeatherDescription}
					<span>
						<img
							src={iconURL}
							alt="Current Weather Icon"
						/>
					</span>
				</p>
			</div>
			<ul>
				<li>Current Temperature for {locationName}: {currentTemperatureValue}&deg;F</li>
				<li>Today's High: {todaysMaxTemperature}&deg;F</li>
				<li>Today's Low: {todaysMinTemperature}&deg;F</li>
			</ul>
		</div>
	);
};