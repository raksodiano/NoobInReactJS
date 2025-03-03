import { url_base_forecast, api_key } from "./../constants/api_url";

const getUrlForecastByCity = city => {
  return `${url_base_forecast}${city}&APPID=${api_key}`;
}

export default getUrlForecastByCity;