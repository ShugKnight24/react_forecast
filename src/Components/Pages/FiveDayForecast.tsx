import { FC } from 'react';

interface FiveDayForecastPageProps {
	currentForecast: any;
}

export const FiveDayForecastPage: FC<FiveDayForecastPageProps> = (props) => {
	const { currentForecast } = props;

	return(
		<div className="five-day-forecast-page">
			<h1>Five Day Forecast</h1>
			<pre>
				{JSON.stringify(currentForecast, null, 2)}
			</pre>
		</div>
	);
};
