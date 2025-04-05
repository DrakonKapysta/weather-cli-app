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

export { printError, printSuccess, printHelp };
