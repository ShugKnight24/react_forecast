import { Clouds, Coordinates } from './shared';

export interface FiveDayForecastResponse {
	cod: string;
	message: number;
	cnt: number;
	list: List[];
	city: City;
};

export interface City {
	id: number;
	name: string;
	coord: Coordinates;
	country: string;
	population: number;
	timezone: number;
	sunrise: number;
	sunset: number;
};

export interface List {
	dt: number;
	main: MainClass;
	weather: Weather[];
	clouds: Clouds;
	wind: Wind;
	visibility: number;
	pop: number;
	sys: Sys;
	dt_txt: Date;
	rain?: Rain;
}

export interface MainClass {
	temp: number;
	feels_like: number;
	temp_min: number;
	temp_max: number;
	pressure: number;
	sea_level: number;
	grnd_level: number;
	humidity: number;
	temp_kf: number;
};

export interface Rain {
	"3h": number;
};

export interface Sys {
	pod: Pod;
};

export enum Pod {
	D = 'd',
	N = 'n'
};

export interface Weather {
	id: number;
	main: WeatherDescriptionEnum;
	description: Description;
	icon: string;
};

export enum Description {
	BrokenClouds = 'broken clouds',
	ClearSky = 'clear sky',
	FewClouds = 'few clouds',
	LightRain = 'light rain',
	OvercastClouds = 'overcast clouds',
	ScatteredClouds = 'scattered clouds'
};

export enum WeatherDescriptionEnum {
	Clear = 'Clear',
	Clouds = 'Clouds',
	Rain = 'Rain'
};

export interface Wind {
	speed: number;
	deg: number;
	gust: number;
};