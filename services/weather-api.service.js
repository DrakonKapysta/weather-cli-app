import { getKeyValue, STORAGE_DICTIONARY } from "./storage.service.js";
import axios from "axios";

const getIcon = (icon) => {
  switch (icon.slice(0, -1)) {
    case "01":
      return "☀️";
    case "02":
      return "🌤️";
    case "03":
      return "☁️";
    case "04":
      return "☁️";
    case "09":
      return "🌧️";
    case "10":
      return "🌦️";
    case "11":
      return "🌩️";
    case "13":
      return "❄️";
    case "50":
      return "🌫️";
  }
};

const getWeather = async (city) => {
  const api_key =
    process.env.TOKEN ?? (await getKeyValue(STORAGE_DICTIONARY.api_key));
  if (!api_key) {
    throw new Error("API key is not set, you can set it with -t [API key]");
  }

  const { data } = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: city,
        appid: api_key,
        units: "metric",
        lang: "ua",
      },
    }
  );
  return data;
};

export { getWeather, getIcon };
