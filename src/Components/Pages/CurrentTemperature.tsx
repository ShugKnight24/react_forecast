import { FC } from 'react';
import { CurrentTemperature } from '../Weather/CurrentTemperature';
import { CurrentTemperatureResponse } from '../../Types/ApiResponses/CurrentTemperature';

interface CurrentTemperaturePageProps {
	currentTemperature: CurrentTemperatureResponse | null;
}

export const CurrentTemperaturePage: FC<CurrentTemperaturePageProps> = (props) => {
	const { currentTemperature } = props;
	const currentTemperatureIcon = currentTemperature?.weather[0].icon;
	const currentTemperatureValue = currentTemperature?.main.temp;
	const currentWeatherDescription = currentTemperature?.weather[0].description;
	const locationName = currentTemperature?.name;
	const sunrise = currentTemperature?.sys.sunrise;
	const sunset = currentTemperature?.sys.sunset;
	const todaysMaxTemperature = currentTemperature?.main.temp_max;
	const todaysMinTemperature = currentTemperature?.main.temp_min;

	return(
		<div className="current-temperature-page">
			{currentTemperature &&
				<CurrentTemperature 
					currentTemperatureIcon={currentTemperatureIcon}
					currentTemperatureValue={currentTemperatureValue}
					currentWeatherDescription={currentWeatherDescription}
					locationName={locationName}
					sunrise={sunrise}
					sunset={sunset}
					todaysMaxTemperature={todaysMaxTemperature}
					todaysMinTemperature={todaysMinTemperature}
				/>
			}
		</div>
	);
};
