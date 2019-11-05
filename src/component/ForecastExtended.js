import React, { Component } from "react";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import getUrlForecastByCity from "./../services/getUrlForecastByCity";
import transformForecast from "./../services/transformForecast";
import ForecastItem from './ForecastItem';
import './styles.css';
/*
const days = [
	'Lunes',
	'Martes',
	'Miercoles',
	'Jueves',
	'Viernes',
	'Sabado',
	'Domingo'
];

const data = {
  temp: 10,
  wState: "todo bien",
  humi: 25,
  wind: "Normal"
};
*/

class ForecastExtended extends Component {

	constructor() {
		super();
		this.state = {
			forecastData: null
		};
	}

	componentDidMount() {
		this.updateCity(this.props.city);
	};

	componentWillReceiveProps(nextProps) {
		if (nextProps !== this.props.city) {
			this.setState({
				forecastData: null
			});
			this.updateCity(this.props.city);
		}
	}

	updateCity = city => {
		const api_forecast = getUrlForecastByCity(city);
		fetch(api_forecast)
			.then(resolve => (resolve.json()))
			.then(weather_data => {
				const forecastData = transformForecast(weather_data);
				this.setState({
					forecastData
				});
			});
	}

	renderForecastItemDays(forecastData) {
		return forecastData.map(forecast => (
			<ForecastItem
				key={`${forecast.weekday}${forecast.hour}`}
				weekday={forecast.weekday}
				hour={forecast.hour}
				data={forecast.data}
			/>
		));
	};

	render() {
		const { city } = this.props;
		const { forecastData } = this.state;
		return (
			<div>
				<h2 className='forecast-title'>Pronostico Extendido para {city}</h2>
				{
					forecastData ?
						this.renderForecastItemDays(forecastData) :
						<CircularProgress />
				}
			</div>
		);
	};
}

ForecastExtended.propType = {
	city: PropTypes.string.isRequired
};

export default ForecastExtended;
