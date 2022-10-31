import axios from "axios";

const convertCityToLatAndLong = async (city) => {
  const apiKey = "something";
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}appid=${apiKey}`;
  const { lat, lon } = await axios.get(url).then(({ data }) => {
    return data;
  });
  return [lat, lon];
};

export default convertCityToLatAndLong;
