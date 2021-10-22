import { FC } from 'react';
import { ThreeHourForecast } from '../Weather/ThreeHourForecast';
import { List } from '../../Types/ApiResponses/FiveDayForecast';

interface FiveDayForecastPageProps {
	currentForecast: List[] | null;
}

export const FiveDayForecastPage: FC<FiveDayForecastPageProps> = (props) => {
	const { currentForecast } = props;
	return(
		<div className="five-day-forecast-page">
			<h1>Five Day Forecast</h1>
			{currentForecast && currentForecast.map((threeHourBlock: List) => {
				const forecastPeriod = threeHourBlock.dt_txt;
				const temperatureIcon = threeHourBlock.weather[0].icon;
				const temperatureValue = threeHourBlock.main.temp;
				const weatherDescription = threeHourBlock.weather[0].description;

				return(
					<ThreeHourForecast
						key={threeHourBlock.dt}
						forecastPeriod={forecastPeriod}
						temperatureIcon={temperatureIcon}
						temperatureValue={temperatureValue}
						weatherDescription={weatherDescription}
					/>
				)
			})}
		</div>
	);
};
