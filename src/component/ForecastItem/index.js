import React from 'react';
import PropTypes from "prop-types";
import WeatherData from './../WeatherLocation/WeatherData';

const data = {
  temp: 10,
  wState: "todo bien",
  humi: 25,
  wind: "Normal"
};

const ForecastItem = ({ weekday, hora, datos }) => {
  return (
    <div>
      <div>{weekday} Hora: {hora} hr</div>
      <WeatherData
        datos={data}
      />
    </div>
  );
};

ForecastItem.propTypes = {
  weekday: PropTypes.string.isRequired,
  hora: PropTypes.number.isRequired,
  datos: PropTypes.shape({
    temp: PropTypes.number.isRequired,
    wState: PropTypes.string.isRequired,
    humi: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
  })
};

export default ForecastItem;