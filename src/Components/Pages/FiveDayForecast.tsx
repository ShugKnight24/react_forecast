import { FC } from 'react';
import { ThreeHourForecast } from '../Weather/ThreeHourForecast';

interface FiveDayForecastPageProps {
	currentForecast: any;
}

export const FiveDayForecastPage: FC<FiveDayForecastPageProps> = (props) => {
	const { currentForecast } = props;
	return(
		<div className="five-day-forecast-page">
			<h1>Five Day Forecast</h1>
			{currentForecast && currentForecast.map((threeHourBlock: any) => {
				const forecastPeriod = threeHourBlock.dt_txt;
				const maxTemperature = threeHourBlock.main.temp_max;
				const minTemperature = threeHourBlock.main.temp_min;
				const temperatureIcon = threeHourBlock.weather[0].icon;
				const temperatureValue = threeHourBlock.main.temp;
				const weatherDescription = threeHourBlock.weather[0].description;

				return(
					<ThreeHourForecast
						key={threeHourBlock.dt}
						forecastPeriod={forecastPeriod}
						maxTemperature={maxTemperature}
						minTemperature={minTemperature}
						temperatureIcon={temperatureIcon}
						temperatureValue={temperatureValue}
						weatherDescription={weatherDescription}
					/>
				)
			})}
		</div>
	);
};
