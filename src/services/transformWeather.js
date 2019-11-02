import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY } from "./../constants/weather";

const getWeatherState = weather_data => {
  return SUN;
};

const transformWeather = weather_data => {
  const { humidity, temp } = weather_data.main;
  const { speed } = weather_data.wind;
  const weatherState = getWeatherState(weather_data);
  const data = {
    humi: humidity,
    temp,
    wState: weatherState,
    wind: `${speed} M/S`
  };

  return data;
};

export default transformWeather;