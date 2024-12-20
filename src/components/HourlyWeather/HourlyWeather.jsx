import React from "react";
import s from "./HourlyWeather.module.css";

const HourlyWeather = ({ weather, selectedDate, selectedUnit }) => {
  const hourlyData = weather?.list?.filter((item) =>
    item.dt_txt.startsWith(selectedDate)
  );

  return (
    <div className={s.hourlyWeather}>
      <h3>Hourly Forecast</h3>
      <div className={s.hours}>
        {hourlyData?.map((hour) => {
          const kelvinTemp = hour.main.temp;
          const tempInCelsius = Math.round(kelvinTemp - 273.15);
          const tempInFahrenheit = Math.round((tempInCelsius * 9) / 5 + 32);

          const displayTemperature =
            selectedUnit === "C" ? tempInCelsius : tempInFahrenheit;

          return (
            <div key={hour.dt} className={s.hour}>
              <p>{hour.dt_txt.split(" ")[1]}</p>
              <p className={s.temp}>
                {displayTemperature}°{selectedUnit}
              </p>
              <img
                src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
                alt={hour.weather[0].description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HourlyWeather;
