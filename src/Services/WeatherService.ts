import { doGet } from './ApiService';

const apiKey = process.env.REACT_APP_OPEN_WEATHER_MAPS_API_KEY;
const apiParam = `&appid=${ apiKey }`;

export const getCurrentTemperatureByGeoCoordinates = (
	latitude: number,
	longitude: number,
	additionalParams: string = ''
) => {
	const url = `weather?lat=${ latitude }&lon=${ longitude }${ additionalParams }${ apiParam }`;
	return doGet(url);
};

export const getFiveDayForecastByGeoCoordinates = (
	latitude: number,
	longitude: number,
	additionalParams: string = ''
) => {
	const url = `forecast?lat=${ latitude }&lon=${ longitude }${ additionalParams }${ apiParam }`;
	return doGet(url);
};

// Weather Icons - https://openweathermap.org/weather-conditions
export const getCurrentWeatherIcon = (iconName: string) => {
	return `http://openweathermap.org/img/wn/${ iconName }@2x.png`;
}