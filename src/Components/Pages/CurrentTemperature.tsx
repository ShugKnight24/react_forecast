import { FC } from 'react';

interface CurrentTemperatureProps {
	currentTemperature: any;
}

export const CurrentTemperature: FC<CurrentTemperatureProps> = (props) => {
	console.log(props.currentTemperature)
	return(
		<div className="current-temperature-page">
		</div>
	);
};
