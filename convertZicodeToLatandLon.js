import axios from "axios";

const convertZipcodeTolatandLon = async (zipcode) => {
  const apiKey = "";
  const url = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipcode}&appid=${apiKey}`;
  const { lat, lon } = await axios.get(url).then(({ data }) => {
    return data;
  });
  return [lat, lon];
};

export default convertZipcodeTolatandLon;
