import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather, fetchFiveDayWeather } from "../redux/weatherSlice";
import SearchBar from "../components/SearchBar/SearchBar";
import WeatherCard from "../components/WeatherCard/WeatherCard";
import HourlyWeather from "../components/HourlyWeather/HourlyWeather";
import Modal from "../components/Modal/Modal";
import s from "./WeatherPage.module.css";
import Container from "../components/Container/Container";

const WeatherPage = () => {
  const dispatch = useDispatch();
  const { weatherData, fiveDayWeatherData, error, loading } = useSelector(
    (state) => state.weather
  );
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState("C");
  const [showModal, setShowModal] = useState(false);
  const [city, setCity] = useState("Yerevan");
  useEffect(() => {
    dispatch(fetchWeather(city));
    dispatch(fetchFiveDayWeather(city));
  }, [dispatch, city]);
  useEffect(() => {
    if (
      fiveDayWeatherData &&
      fiveDayWeatherData.list &&
      fiveDayWeatherData.list.length > 0
    ) {
      setSelectedDate(fiveDayWeatherData.list[0].dt_txt.split(" ")[0]);
    }
  }, [fiveDayWeatherData]);
  useEffect(() => {
    if (weatherData && weatherData.list && weatherData.list.length > 0) {
      setSelectedDate(weatherData.list[0].dt_txt.split(" ")[0]);
    }
  }, [weatherData]);

  useEffect(() => {
    if (error) {
      setShowModal(true);
    }
  }, [error]);

  const handleSearch = (city) => {
    setCity(city);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleUnitToggle = () => {
    setSelectedUnit((prevUnit) => (prevUnit === "C" ? "F" : "C"));
  };

  const handleCloseModal = () => {
    console.log(showModal);
    setShowModal(false);
  };

  const days = fiveDayWeatherData?.list?.reduce((acc, item) => {
    const date = item.dt_txt.split(" ")[0];
    if (!acc.includes(date)) {
      acc.push(date);
    }
    return acc;
  }, []);

  return (
    <div className={s.mainPage}>
      <SearchBar
        onSearch={handleSearch}
        onUnitToggle={handleUnitToggle}
        selectedUnit={selectedUnit}
      />

      {loading && <p>Loading...</p>}
      {fiveDayWeatherData && (
        <div className={s.mainWrap}>
          <Container>
            <div className={s.mainContent}>
              <div className={s.weatherInfo}>
                <WeatherCard
                  weather={fiveDayWeatherData}
                  selectedDate={selectedDate}
                  selectedUnit={selectedUnit}
                />
              </div>
              <div className={s.hourlyWeather}>
                <HourlyWeather
                  weather={fiveDayWeatherData}
                  selectedDate={selectedDate}
                  selectedUnit={selectedUnit}
                />
              </div>
              <div className={s.dateTabs}>
                {days?.map((date) => {
                  const dayData = fiveDayWeatherData.list.find((item) =>
                    item.dt_txt.startsWith(date)
                  );
                  const dateObject = new Date(date);
                  const dateString = dateObject.toLocaleDateString();
                  const icon = dayData.weather[0].icon;
                  const temperature = dayData.main.temp;
                  const displayTemperature =
                    selectedUnit === "C"
                      ? Math.round(temperature - 273.15)
                      : Math.round(((temperature - 273.15) * 9) / 5 + 32);
                  return (
                    <button
                      key={date}
                      className={`${selectedDate === date && s.selectedTab} ${
                        s.tab
                      }`}
                      onClick={() => handleDateSelect(date)}
                    >
                      <p className={s.dateString}>{dateString}</p>
                      <img
                        className={s.img}
                        src={`http://openweathermap.org/img/wn/${icon}.png`}
                        alt={dayData.weather[0].description}
                      />
                      <p className={s.temp}>
                        {displayTemperature}°{selectedUnit}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </Container>
        </div>
      )}
      {showModal && <Modal message={error} onClose={handleCloseModal} />}
    </div>
  );
};

export default WeatherPage;
