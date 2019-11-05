import React from 'react';
import PropTypes from "prop-types";
import WeatherData from './../WeatherLocation/WeatherData';

const ForecastItem = ({ weekday, hour, data }) => {
  return (
    <div>
      <h3>{weekday} - {hour} hr</h3>
      <WeatherData
        datos={data}
      />
    </div>
  );
};

ForecastItem.propTypes = {
  weekday: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  datos: PropTypes.shape({
    temp: PropTypes.number.isRequired,
    wState: PropTypes.string.isRequired,
    humi: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
  })
};

export default ForecastItem;