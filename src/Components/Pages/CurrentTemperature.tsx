import { FC } from 'react';

interface CurrentTemperaturePageProps {
	currentTemperature: any;
}

export const CurrentTemperaturePage: FC<CurrentTemperaturePageProps> = (props) => {
	const { currentTemperature } = props;
	return(
		<div className="current-temperature-page">
			<h1>Current Temperature</h1>
			<pre>
				{JSON.stringify(currentTemperature, null, 2)}
			</pre>
		</div>
	);
};
