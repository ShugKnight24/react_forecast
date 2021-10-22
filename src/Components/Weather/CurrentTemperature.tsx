import { FC } from 'react';
import { getCurrentWeatherIcon } from '../../Services/WeatherService';
import { capitalizeText } from '../../Utils/text';
import { MapPin } from '../Icons/MapPin';
import { returnCurrentDate } from '../../Utils/date';
interface CurrentTemperatureProps {
	currentTemperatureIcon?: string;
	currentTemperatureValue?: number;
	currentWeatherDescription?: string;
	locationName?: string;
	todaysMaxTemperature?: number;
	todaysMinTemperature?: number;
}

interface CurrentDate {
	date: Date;
	day: number;
	stringDay: string;
	stringMonth: string;
	year: number;
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
	const iconURL = currentTemperatureIcon
		? getCurrentWeatherIcon(currentTemperatureIcon)
		: '';
	const capitalizedDescription = currentWeatherDescription 
		? capitalizeText(currentWeatherDescription)
		: '';
	const currentDate: CurrentDate = returnCurrentDate();
	const { day, stringDay, stringMonth, year } = currentDate;

	return(
		<div className="current-temperature-container">
			<div className="overlay">
				<h1>Current Temperature</h1>
				<div className="date-location-info">
					<h2 className="dayname">{stringDay}</h2>
					<span className="date-day">
						{day} {stringMonth} {year}
					</span>
					<br />
					<span className="location">
						<MapPin /> {locationName}
					</span>
				</div>
				<div className="current-temp-info">
					<img
						src={iconURL}
						alt="Current Weather Icon"
					/>
				</div>
				<ul>
					<li>High: {todaysMaxTemperature}&deg;F</li>
					<li>Low: {todaysMinTemperature}&deg;F</li>
					<li className="current-temp">{currentTemperatureValue}&deg;F</li>
					<li className="weather-description">{capitalizedDescription}</li>
				</ul>
			</div>
		</div>
	);
};