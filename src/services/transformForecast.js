import moment from "moment";
import 'moment/locale/es';
import transformWeather from "./transformWeather";

const transformForecast = data => {
  return data.list.filter(item => (
    moment.unix(item.dt).hour() === 11 ||
    moment.unix(item.dt).hour() === 14 ||
    moment.unix(item.dt).hour() === 20
  )).map(item => (
    {
      weekday: moment.unix(item.dt).format('ddd'),
      hour: moment.unix(item.dt).hour(),
      data: transformWeather(item)
    }
  ));
};

export default transformForecast;