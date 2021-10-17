import { FC } from 'react';

interface FiveDayForecastProps {
	currentForecast: any;
}

export const FiveDayForecast: FC<FiveDayForecastProps> = (props) => {
	console.log(props.currentForecast)
	return(
		<div className="five-day-forecast-page">
		</div>
	);
};
