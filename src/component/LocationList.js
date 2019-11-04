import React from "react";
import PropTypes from "prop-types";
import WeatherLocation from "./WeatherLocation";
import './styles.css';

const LocationList = ({ cities, onSelectedLocation }) => {
  const handleWeatherLocationListClick = city => {
    console.log("handleWeatherLocationListClick");
    onSelectedLocation(city);
  };

  const strToComponent = cities => cities.map(city =>
    <WeatherLocation
      key={city}
      city={city}
      onWeatherLocationClick={() => handleWeatherLocationListClick(city)}
    />
  );
  
  return (
    <div className="locationList">{
      strToComponent(cities)
    }</div>
  );
};

LocationList.propType = {
  cities: PropTypes.array.isRequired,
  onSelectedLocation: PropTypes.func
};

export default LocationList;
