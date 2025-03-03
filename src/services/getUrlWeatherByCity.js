import { url_base_weather, api_key } from "./../constants/api_url";

const getUrlWeatherByCity = city => {
  return `${url_base_weather}${city}&APPID=${api_key}`;
}

export default getUrlWeatherByCity;