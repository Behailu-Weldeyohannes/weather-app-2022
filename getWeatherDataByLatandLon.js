import axios from "axios";

const getWeatherDataByLatandLon = async (lat, lon) => {
  const apiKey = "3e95b400700f2b205dff726eb3961bb2";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  return axios.get(url).then(({ data }) => {
    return data;
  });
};

export default getWeatherDataByLatandLon;
