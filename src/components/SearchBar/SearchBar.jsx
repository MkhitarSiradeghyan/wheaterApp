import React, { useState } from "react";
import s from "./SearchBar.module.css";

const SearchBar = ({ onSearch, onUnitToggle, selectedUnit }) => {
  const [city, setCity] = useState("Yerevan");
  const handleSearch = () => {
    if (city) onSearch(city);
  };
  return (
    <div className={s.searchBar}>
      <div className={s.searchWrap}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter your city"
        />
        <button className={s.searchBtn} onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className={s.unitToggle}>
        <button
          className={`${s.switch} ${selectedUnit === "C" ? s.left : s.right}`}
          onClick={onUnitToggle}
        >
          <div className={s.round}></div>
          <div
            className={`${s.unit} ${s.c} ${selectedUnit === "F" && s.hidden}`}
          >
            °C
          </div>
          <div
            className={`${s.unit} ${s.f} ${selectedUnit === "C" && s.hidden}`}
          >
            °F
          </div>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
