import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import PropTypes from "prop-types";
import transformWeather from "./../../services/transformWeather";
import getUrlWeatherByCity from "./../../services/getUrlWeatherByCity";
import axios from "axios";
import Location from "./Location";
import WeatherData from "./WeatherData";
import "./styles.css";

class WeatherLocation extends Component {
  constructor(props) {
    super(props);
    const { city } = props;

    this.state = {
      city,
      data: null
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.handleUpdateClick();
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  handleUpdateClick = () => {
    const api_weather = getUrlWeatherByCity(this.state.city);
    axios.get(api_weather)
      .then(resolve => {
        return resolve;
      })
      .then(data => {
        const newData = transformWeather(data.data);
        this.setState({
          data: newData
        });
      });

    console.log("Actualizado");
  };

  render() {
    console.log("render");
    
    const { city, data } = this.state;
    return (
      <div className="weatherLocationCont">
        <Location city={city} />
        { data ? <WeatherData datos={data} /> : <CircularProgress /> }
      </div>
    );
  }
}

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
};

export default WeatherLocation;