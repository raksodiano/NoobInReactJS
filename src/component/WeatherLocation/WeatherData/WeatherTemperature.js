import React from "react";
import PropTypes from "prop-types";
import WeatherIcons from "react-weathericons";
import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY
} from "../../../constants/weather";
import "./styles.css";

const icons = {
  [CLOUD]: "cloud",
  [CLOUDY]: "cloudy",
  [SUN]: "day-sunny",
  [RAIN]: "rain",
  [SNOW]: "snow",
  [WINDY]: "windy"
};

const getWeatherIcon = weatherState => {
  const icon = icons[weatherState];
  const sizeIcon = "4x";
  let nameIcon = icon ? icon : "day-sunny";

  return (
    <WeatherIcons 
      className="wicon" 
      name={nameIcon} 
      size={sizeIcon} 
    />
  );
};

const WeatherTemperature = ({ temperature, weatherState }) => {
  return (
    <div className="weatherTemperatureCont">
      {getWeatherIcon(weatherState)}
      <span className="temperature"> {`${temperature}`} </span>
      <span className="temperatureType"> {`C°`} </span>
    </div>
  );
};

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;
