import React, { Component } from "react";
import transformWeather from "./../../services/transformWeather";
import { api_weather } from "./../../constants/api_url";
import axios from "axios";
import Location from "./Location";
import WeatherData from "./WeatherData";
import "./styles.css";

class WeatherLocation extends Component {
  constructor() {
    super();
    this.state = {
      city: "San Juan de los Morros",
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
        { data ? <WeatherData datos={data} /> : "Cargando..." }
      </div>
    );
  }
}

export default WeatherLocation;
