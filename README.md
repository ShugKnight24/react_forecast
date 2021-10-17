# React Weather App

Building a weather app leveraging [OpenWeatherMap API](https://openweathermap.org/api)

## Initial Project Setup

- Add a `.env` file w/ your OpenWeatherMap API key as `REACT_APP_OPEN_WEATHER_MAPS_API_KEY`
  - look at `.example.env` for an example

## Running Project

- Install w/ `yarn install` or `npm install`
- Run w/ `yarn start` or `npm run start`

Runs the app in the development mode on port 3000 - [http://localhost:3000](http://localhost:3000)

## OpenWeatherMap API References
  - [API Documentation](https://openweathermap.org/api)

  ### Current Weather Endpoint
    - [Docs](https://openweathermap.org/current)

  ### Five Day Weather Forecast Endpoint
    - [Docs](https://openweathermap.org/forecast5)

## ToDos
- [ ] Current Temperature Page
  - [ ] Display current temp @ user's current location
    - [ ] User Permissions
	  - [ ] Settings Tab?
- [ ] 5 Day Forecast
  - [ ] Display all of the 3-hourly forecasts within 5 day period
      - Each row in the list should display:
        - [ ] Forecast date and time
        - [ ] Forecast temperature in Fahrenheit
		  - [ ] Add switch that converts to Celcius
        - [ ] OpenWeatherMap icon that represents the forecast weather conditions
		  - [Weather Conditions](https://openweathermap.org/weather-conditions)
- [ ] Cleanup Type Safety
  - Move away from `any` use

## Change Log
- Follow all changes made in the [Changelog](./CHANGELOG.md)