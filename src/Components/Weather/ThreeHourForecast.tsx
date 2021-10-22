import { FC } from 'react';
import { getCurrentWeatherIcon } from '../../Services/WeatherService';
import { capitalizeText } from '../../Utils/text';
import { returnCurrentDate } from '../../Utils/date';
import { CurrentDate } from '../../Types/Shared';

interface ThreeHourForecastProps {
	forecastPeriod: Date;
	temperatureIcon: string;
	temperatureValue: number;
	weatherDescription: string;
}

export const ThreeHourForecast: FC<ThreeHourForecastProps> = (props) => {
	const {
		forecastPeriod,
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
	
	return(
		<div className="three-hour-block-container">
			<div className="date-info">
				<div className="date-location-info">
					<h2 className="dayname">{stringDay}</h2>
					<span className="date-day">
						{day} {stringMonth} {year} - {hours}:{minutes}
					</span>
					<span className="forecast-time">

					</span>
					<br />
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