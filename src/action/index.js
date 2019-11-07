import getUrlForecastByCity from "./../services/getUrlForecastByCity";
import transformForecast from "./../services/transformForecast";
import getUrlWeatherByCity from "./../services/getUrlWeatherByCity";
import transformWeather from "./../services/transformWeather";
import Axios from "axios";

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';

const setCity = payload => ({
	type: SET_CITY,
	payload
});

const setForecastData = payload => ({
	type: SET_FORECAST_DATA,
	payload
});

const getWeatherCity = payload => ({
	type: GET_WEATHER_CITY,
	payload
});

const setWeatherCity = payload => ({
	type: SET_WEATHER_CITY,
	payload
});

export const setSelectedCity = payload => {
	return (dispatch, getState) => {
		const api_forecast = getUrlForecastByCity(payload);
		dispatch(setCity(payload));

		const state = getState();
		const date = state.cities[payload] && state.cities[payload].forecastDataDate;
		const now = new Date();

		if (date && ((now - date) < (1 * 60 * 1000))) {
			return;
		} else {
			return Axios(api_forecast).then(
				resolve => (resolve)
			).then(weather_data => {
				const forecastData = transformForecast(weather_data.data);
				dispatch(setForecastData({
					city: payload, 
					forecastData
				}));
			});
		}
	};
};

export const setWeather = payload => {
	return dispatch => {
		payload.forEach(city => {
			const api_weather = getUrlWeatherByCity(city);
			dispatch(getWeatherCity(city));
			return fetch(api_weather).then(
				resolve => (resolve.json())
			).then(weather_data => {
				const weather = transformWeather(weather_data);
				dispatch(setWeatherCity({
					city, 
					weather
				}));
			});
		});
	}
};