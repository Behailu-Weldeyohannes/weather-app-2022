import getWeatherDataByLatandLon from "./getWeatherDataByLatandLon";
import convertCityToLatAndLong from "./convertCityToLatAndLong";

const getWeatherDataByCityName = (city) => {
  const [lat, lon] = convertCityToLatAndLong(city);
  return getWeatherDataByLatandLon(lat, lon);
};

export default getWeatherDataByCityName;
