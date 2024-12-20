# Weather App

This project is a weather forecasting application that allows users to search for weather information for different cities. It provides the current weather conditions, hourly forecasts, and a 5-day forecast. Users can toggle between Celsius and Fahrenheit for temperature display.

## Features

- **Search Functionality:** Enter a city name to get weather details.
- **Current Weather:** Displays the current weather condition for the selected city.
- **5-Day Forecast:** Shows the weather forecast for the next 5 days, along with an hourly breakdown.
- **Temperature Unit Toggle:** Switch between Celsius and Fahrenheit.
- **Error Handling:** Displays a modal in case of an invalid city name or API error.

## Technologies Used

- **Frontend:** React, CSS Modules
- **State Management:** Redux Toolkit
- **API Integration:** OpenWeatherMap API
- **Development Tools:** Webpack, Babel, ESLint

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/weather-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd weather-app
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```
2. Open your browser and go to `http://localhost:3000`.


## Project Structure

```
weather-app/
├── public/
├── src/
│   ├── components/
│   │   ├── SearchBar/
│   │   ├── WeatherCard/
│   │   ├── HourlyWeather/
│   │   ├── Modal/
│   ├── redux/
│   │   ├── store.js
│   │   ├── weatherSlice.js
│   ├── styles/
│   ├── App.js
│   ├── index.js
├── .env
├── package.json
└── README.md
```

## Key Components

### `SearchBar`
- Allows the user to input a city name and triggers the search.
- Includes a toggle switch for Celsius/Fahrenheit.

### `WeatherCard`
- Displays the current weather for the selected day.

### `HourlyWeather`
- Provides an hourly breakdown of the weather for the selected day.

### `Modal`
- Displays error messages when a city is not found or an API error occurs.

## API Integration

This app uses the OpenWeatherMap API to fetch weather data. The following endpoints are used:

1. **Current Weather:**
   `https://api.openweathermap.org/data/2.5/weather`
2. **5-Day Forecast:**
   `https://api.openweathermap.org/data/2.5/forecast`


## Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for their API.
- React and Redux communities for their resources and tools.

