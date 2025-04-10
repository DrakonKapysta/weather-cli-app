import { promises } from "fs";
import { homedir } from "os";
import { join } from "path";

const filePath = join(homedir(), "weather-cli-data.json");

const STORAGE_DICTIONARY = {
  api_key: "api_key",
  city: "city",
};

const isExists = async (path) => {
  try {
    await promises.stat(path);
    return true;
  } catch (error) {
    return false;
  }
};

const saveKeyValue = async (key, value) => {
  let data = {};
  if (await isExists(filePath)) {
    const file = await promises.readFile(filePath, { encoding: "utf-8" });
    data = JSON.parse(file);
  }
  data[key] = value;
  await promises.writeFile(filePath, JSON.stringify(data));
};

const getKeyValue = async (key) => {
  if (await isExists(filePath)) {
    const file = await promises.readFile(filePath, { encoding: "utf-8" });
    const data = JSON.parse(file);
    return data[key];
  }
  return undefined;
};

export { saveKeyValue, getKeyValue, STORAGE_DICTIONARY };
