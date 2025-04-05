import chalk from "chalk";
import dedent from "dedent";
const printError = (error) => {
  console.log(chalk.bgRed(" ERORR ") + " " + error);
};

const printSuccess = (message) => {
  console.log(chalk.bgGreen(" SUCCESS ") + " " + message);
};

const printHelp = () => {
  console.log(
    dedent(`${chalk.bgCyan(" HELP ")}
    Available commands:
    weater - get weather info
    -s [city] - get weather in city
    -t [API key] - set API key
    -v - get package version 
    -h - get help
    `)
  );
};

const printWeather = (weatherData, icon = "") => {
  const { name, main, weather, wind } = weatherData;
  const { temp, feels_like, pressure, humidity } = main;
  const { main: mainDescription } = weather[0];
  console.log(
    dedent(`${chalk.bgMagenta(" WEATHER ")} Weather in city ${name}
    ${icon}  ${mainDescription}
    Temperature: ${temp} C (feels like ${feels_like} C)
    Humidity: ${humidity} %
    Pressure: ${pressure} hPa
    Wind speed: ${wind.speed} m/s
    `)
  );
};

export { printError, printSuccess, printHelp, printWeather };
