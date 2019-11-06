import React from "react";
import PropTypes from "prop-types";
import WeatherLocation from "./WeatherLocation";
import './styles.css';

const LocationList = ({ cities, onSelectedLocation }) => {
  const handleWeatherLocationListClick = city => {
    onSelectedLocation(city);
  };
debugger;
  const strToComponent = cities => cities.map(city => 
    <WeatherLocation
      key={city.key}
      city={city.name}
      onWeatherLocationClick={() => handleWeatherLocationListClick(city.name)}
      data={city.data}
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
