import React from "react";
import WeatherLocation from "./WeatherLocation";

const LocationList = () => {
  return (
    <div>
      <WeatherLocation city="San Juan de los Morros,ve" />

      <WeatherLocation city="Bogota,col" />

      <WeatherLocation city="Buenos Aires,ar" />
    </div>
  );
};

export default LocationList;
