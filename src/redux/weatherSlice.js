import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=26f4ea79dc0a4dff24dac1441a3e35a5`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const fetchFiveDayWeather = createAsyncThunk(
  "weather/fetchFiveDayWeather",
  async (city, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=26f4ea79dc0a4dff24dac1441a3e35a5`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      return rejectWithValue(errorMessage);
    }
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weatherData: null,
    fiveDayWeatherData: null,
    error: null,
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.weatherData = action.payload;
        state.loading = false;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(fetchFiveDayWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFiveDayWeather.fulfilled, (state, action) => {
        console.log(action.payload);
        state.fiveDayWeatherData = action.payload;
        state.loading = false;
      })
      .addCase(fetchFiveDayWeather.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default weatherSlice.reducer;
