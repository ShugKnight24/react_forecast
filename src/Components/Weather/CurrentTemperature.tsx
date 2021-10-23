import { FC } from 'react';
import { getCurrentWeatherIcon } from '../../Services/WeatherService';
import { capitalizeText } from '../../Utils/text';
import { MapPin } from '../Icons/MapPin';
import { Sunrise } from '../Icons/Sunrise';
import { Sunset } from '../Icons/Sunset';
import { returnCurrentDate } from '../../Utils/date';
import { CurrentDate } from '../../Types/Shared';

interface CurrentTemperatureProps {
	currentTemperatureIcon?: string;
	currentTemperatureValue?: number;
	currentWeatherDescription?: string;
	locationName?: string;
	sunrise?: number;
	sunset?: number;
	todaysMaxTemperature?: number;
	todaysMinTemperature?: number;
}

export const CurrentTemperature: FC<CurrentTemperatureProps> = (props) => {
	const {
		currentTemperatureIcon,
		currentTemperatureValue,
		currentWeatherDescription,
		locationName,
		sunrise,
		sunset,
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
	const { day, hours, minutes, stringDay, stringMonth, year } = currentDate;
	const sunriseTime: CurrentDate | null = sunrise 
		? returnCurrentDate(new Date(sunrise))
		: null;
	const sunsetTime: CurrentDate | null = sunset 
		? returnCurrentDate(new Date(sunset))
		: null;

	return(
		<div className="current-temperature-container">
			<div className="overlay">
				<h1>Current Temperature</h1>
				<div className="date-location-info">
					<h2 className="dayname">{stringDay}</h2>
					<span className="date-day">
						{day} {stringMonth} {year} - {hours}:{minutes}
					</span>
					<br />
					<span className="location">
						<MapPin 
							size={40}
						/> {locationName}
					</span>
					<br />
					<span className="sunrise-sunset">
						<Sunrise
							size={40}
						/> {sunriseTime?.hours}:{sunriseTime?.minutes}
						<br />
						<Sunset
							size={40}
						/> {sunsetTime?.hours}:{sunsetTime?.minutes}
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