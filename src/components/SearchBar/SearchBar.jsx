import React, { useState } from 'react'
import s from './SearchBar.module.css'

const SearchBar = ({onSearch}) => {
  const [city, setCity] = useState("Yerevan")
  const handleSearch = () => {
    if (city) onSearch(city)
  }
  return (
    <div className={s.searchbar}>
            <input 
            type="text"
            value={city}
            onChange={e => setCity(e.target.value)} 
            placeholder='Enter your city'
            />
            <button onClick={handleSearch}>Search</button>
          </div>
  )
}

export default SearchBar