import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import PropTypes from "prop-types";
import Location from "./Location";
import WeatherData from "./WeatherData";
import "./styles.css";

const WeatherLocation = ({ onWeatherLocationClick, city, data }) => {
  return (
    <div className="weatherLocationCont" onClick={onWeatherLocationClick} >
      <Location city={city} />
      {data ? <WeatherData datos={data} /> : <CircularProgress />}
    </div>
  );
}

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  onWeatherLocationClick: PropTypes.func,
  datos: PropTypes.shape({
    temp: PropTypes.number.isRequired,
    wState: PropTypes.string.isRequired,
    humi: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
  })
};

export default WeatherLocation;