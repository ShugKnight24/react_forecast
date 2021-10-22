import { FC } from 'react';
import { getCurrentWeatherIcon } from '../../Services/WeatherService';
import { capitalizeText } from '../../Utils/text';
import { returnCurrentDate } from '../../Utils/date';
import { CurrentDate } from '../../Types/Shared';
import { Sunrise } from '../Icons/Sunrise';
import { Sunset } from '../Icons/Sunset';

interface ThreeHourForecastProps {
	forecastPeriod: Date;
	sunrise?: number;
	sunset?: number;
	temperatureIcon: string;
	temperatureValue: number;
	weatherDescription: string;
}

export const ThreeHourForecast: FC<ThreeHourForecastProps> = (props) => {
	const {
		forecastPeriod,
		sunrise,
		sunset,
		temperatureIcon,
		temperatureValue,
		weatherDescription
	} = props;
	const iconURL = getCurrentWeatherIcon(temperatureIcon);
	const capitalizedDescription = weatherDescription 
		? capitalizeText(weatherDescription)
		: '';
	const currentDate: CurrentDate = returnCurrentDate(forecastPeriod);
	const { day, hours, minutes, stringDay, stringMonth, year } = currentDate;
	const sunriseTime: CurrentDate | null = sunrise 
		? returnCurrentDate(new Date(sunrise))
		: null;
	const sunsetTime: CurrentDate | null = sunset 
		? returnCurrentDate(new Date(sunset))
		: null;
	
	return(
		<div className="three-hour-block-container">
			<div className="date-info">
				<div className="date-location-info">
					<h2 className="dayname">{stringDay}</h2>
					<span className="date-day">
						{day} {stringMonth} {year} - {hours}:{minutes}
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
			</div>
			<ul>
				<li className="expected-temp">{temperatureValue}&deg;F</li>
				<li className="weather-description">{capitalizedDescription}</li>
			</ul>
		</div>
	);
};