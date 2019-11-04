import React, { Component } from "react";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
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

	renderForecastItemDays() {
		return "Data";
		/*return days.map(day => {
			return (
				<ForecastItem
					key={day}
					weekday={day}
					hora={10}
					datos={data}
				/>
			);
		}
		);*/
	};

	render() {
		const { forecastData } = this.state;
		const { city } = this.props;
		return (
			<div>
				<h2 className='forecast-title'>Pronostico Extendido para {city}</h2>
				{
					forecastData ?
					this.renderForecastItemDays() :
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
