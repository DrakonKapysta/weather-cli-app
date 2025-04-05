#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import {
  printHelp,
  printError,
  printSuccess,
  printWeather,
} from "./services/log.service.js";
import {
  getKeyValue,
  saveKeyValue,
  STORAGE_DICTIONARY,
} from "./services/storage.service.js";
import { getIcon, getWeather } from "./services/weather-api.service.js";

const saveToken = async (token) => {
  if (!token.length) {
    return printError("API key is empty");
  }
  try {
    await saveKeyValue(STORAGE_DICTIONARY.api_key, token);
    printSuccess("API key saved");
  } catch (error) {
    printError(error.message);
  }
};

const saveCity = async (city) => {
  if (!city.length) {
    return printError("City is empty");
  }
  try {
    await saveKeyValue(STORAGE_DICTIONARY.city, city);
    printSuccess("City saved");
  } catch (error) {
    printError(error.message);
  }
};

const getForecast = async () => {
  const city = process.env.CITY ?? (await getKeyValue(STORAGE_DICTIONARY.city));
  if (!city)
    return printError("City is not set, you can set it with -s [City]");
  try {
    const weatherData = await getWeather(city);
    printWeather(weatherData, getIcon(weatherData.weather[0].icon));
  } catch (error) {
    if (error?.response?.status === 404) {
      printError("City not found");
    } else if (error?.response?.status === 401) {
      printError("API key is not valid");
    } else {
      printError(error.message);
    }
  }
};

const initCLI = async () => {
  const args = getArgs(process.argv);

  if (args.h) return printHelp();

  if (args.t) await saveToken(args.t);

  if (args.s) await saveCity(args.s);

  await getForecast();
};

initCLI();
