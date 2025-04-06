# 🌦️ Weather CLI App

A simple and beautiful CLI tool to check the current weather in your city using the [OpenWeatherMap API](https://openweathermap.org/).

> ⚙️ Built with Node.js, uses `chalk` for colored output and `axios` for API requests.

---

## 📦 Features

- 🌍 Get current weather in any city
- ☁️ Displays temperature, humidity, pressure, wind speed, and weather description
- 🎨 Pretty output with icons and colors
- 🗝️ Save your API key locally for future use
- 📌 Save your favorite city
- 🆘 Built-in help

---

## 🛠 Installation

```bash
git clone https://github.com/DrakonKapysta/weather-cli.git
cd weather-cli
npm install
```

## 🚀 Usage

Before you can start fetching weather data, you'll need to set your API key from OpenWeatherMap and the city. To do that, run:

```
node weather.js -s [city] -t [API key]
```

Replace [city] with the desired city name and [API key] with your OpenWeatherMap API key.

If you want to change the city or API key in the future, use the available options like this:

```
node weather.js [options]
```

### Available Options:

| Option                 | Description                      |
| ---------------------- | -------------------------------- |
| `weather`              | Show weather in the saved city   |
| `weather -s [city]`    | Save city to get weather         |
| `weather -t [API key]` | Save your OpenWeatherMap API key |
| `weather -h`           | Show help info                   |

> **Note:** You only need to use the `-s` and `-t` flags once to set the city and API key. After that, you can just run `node weather.js` to check the weather.

## 🧪 Sample Output

```
Weather in city Lviv
🌦️  Rain
Temperature: 12.4 C (feels like 10.2 C)
Humidity: 80 %
Pressure: 1012 hPa
Wind speed: 4.5 m/s
```

## 🔐 How it works

- The app stores your API key and default city locally using a simple key-value storage.
- It fetches data from OpenWeatherMap API.
- Weather icons are converted into user-friendly emojis for clarity and charm.

### 🤝 Contributing

Contributions and suggestions are welcome! Feel free to fork the repo and open a PR.
