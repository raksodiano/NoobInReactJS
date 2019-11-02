import React from "react";
import WeatherLocation from "./WeatherLocation";

const LocationList = () => {
  return (
    <div>
      <WeatherLocation city="San Juan de los Morros,ve" />
      <WeatherLocation city="London,uk" />
      <WeatherLocation city="Washington,us" />
    </div>
  );
};

export default LocationList;
