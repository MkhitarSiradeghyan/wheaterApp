import React from "react";
import s from "./WeatherCard.module.css";
import { toCapitalCase } from "../../utils/toCapitalCase";

const WeatherCard = ({ weather, selectedDate, selectedUnit }) => {
  const selectedDayData = weather?.list?.find((item) =>
    item.dt_txt.startsWith(selectedDate)
  );

  if (!selectedDayData) {
    return <div>No weather data available for this day.</div>;
  }

  const kelvinTemp = selectedDayData.main.temp;
  const tempInCelsius = Math.round(kelvinTemp - 273.15);
  const tempInFahrenheit = Math.round((tempInCelsius * 9) / 5 + 32);

  const displayTemperature =
    selectedUnit === "C" ? tempInCelsius : tempInFahrenheit;

  return (
    <div className={s.weatherCard}>
      <h2 className={s.city}>{weather.city.name}</h2>
      <p className={s.description}>
        {toCapitalCase(selectedDayData.weather[0].description)}
      </p>
      <img
        className={s.icon}
        src={`http://openweathermap.org/img/wn/${selectedDayData.weather[0].icon}.png`}
        alt={toCapitalCase(selectedDayData.weather[0].description)}
      />
      <p className={s.temp}>
        {displayTemperature}°{selectedUnit}
      </p>
    </div>
  );
};

export default WeatherCard;
