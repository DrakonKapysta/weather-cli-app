#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { printHelp, printError, printSuccess } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.service.js";

const saveToken = async (token) => {
  if (!token.length) {
    return printError("API key is empty");
  }
  try {
    await saveKeyValue("API_KEY", token);
    printSuccess("API key saved");
  } catch (error) {
    printError(error.message);
  }
};

const initCLI = () => {
  const args = getArgs(process.argv);
  Object.entries(args).forEach(([arg, value], index, arr) => {
    switch (arg) {
      case "h":
        return printHelp();
      case "t":
        return saveToken(value);
    }
  });
};

initCLI();
