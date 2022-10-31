import convertZipcodeTolatandLon from "./convertZipcodeTolatandLon";
import getWeatherDataByLatandLon from "./getWeatherDataByLatandLon";

const getWeatherDataByZipcode = (zipcode) => {
  const [lat, lon] = convertZipcodeTolatandLon(zipcode);
  return getWeatherDataByLatandLon(lat, lon);
};

export default getWeatherDataByZipcode;
