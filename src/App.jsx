import "./App.css";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import WeatherPage from "./pages/WeatherPage";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<WeatherPage />} />
      </Routes>
    </Provider>
  );
}

export default App;
