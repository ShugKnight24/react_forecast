import { doGet } from './ApiService';

const apiKey = process.env.REACT_APP_OPEN_WEATHER_MAPS_API_KEY;
const apiParam = `&appid=${ apiKey }`;

export const getCurrentTemperatureByGeoCoordinates = (
	latitude: number,
	longitude: number
) => {
	return doGet(`weather?lat=${ latitude }&lon=${ longitude }${ apiParam }`);
}

export const getFiveDayForecastByGeoCoordinates = (
	latitude: number,
	longitude: number
) => {
	return doGet(`forecast?lat=${ latitude }&lon=${ longitude }${ apiParam }`);
}