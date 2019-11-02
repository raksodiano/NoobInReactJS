import React from "react";
import PropTypes from "prop-types";
import WeatherExtraInfo from "./WeatherExtraInfo";
import WeatherTemperature from "./WeatherTemperature";
import "./styles.css";

const WeatherData = ({ datos }) => {
  const { temp, wState, humi, wind } = datos;
  return (
    <div className="weatherDataCont">
      <WeatherTemperature 
        temperature={temp} 
        weatherState={wState} 
      />
      <WeatherExtraInfo 
        humidity={humi} 
        wind={wind} 
      />
    </div>
  );
};

WeatherData.propTypes = {
  datos: PropTypes.shape({
    temp: PropTypes.number.isRequired,
    wState: PropTypes.string.isRequired,
    humi: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
  })
};

export default WeatherData;
