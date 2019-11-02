const location = "San Juan de los Morros,ve";
const api_key = "6ca7841883380f62ba58d016d20a20d3";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather?q=";

export const api_weather = `${url_base_weather}${location}&APPID=${api_key}&units=metric`;