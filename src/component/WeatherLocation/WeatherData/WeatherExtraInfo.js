import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const WeatherExtraInfo = ({ humidity, wind }) => {
  return (
    <div className="weatherExtraInfoCont">
      <span className="extraInfoText"> {`Humedad: ${humidity} %`} </span>
      <span className="extraInfoText"> {`Vientos: ${wind}`} </span>
    </div>
  );
};

WeatherExtraInfo.propType = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired
};

export default WeatherExtraInfo;
