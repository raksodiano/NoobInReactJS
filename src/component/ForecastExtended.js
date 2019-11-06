import React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import ForecastItem from './ForecastItem';
import './styles.css';

const renderForecastItemDays = forecastData => {
	return forecastData.map(forecast => (
		<ForecastItem
			key={`${forecast.weekday}${forecast.hour}`}
			weekday={forecast.weekday}
			hour={forecast.hour}
			data={forecast.data}
		/>
	));
};

const ForecastExtended = ({ city, forecastData }) => (
	<div>
		<h2 className='forecast-title'>Pronostico Extendido para {city}</h2>
		{
			forecastData ?
				renderForecastItemDays(forecastData) :
				<CircularProgress />
		}
	</div>
);

ForecastExtended.propType = {
	city: PropTypes.string.isRequired,
	forecastData: PropTypes.array,
};

export default ForecastExtended;
