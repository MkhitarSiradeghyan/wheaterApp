import './App.css';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import WheaterPage from './pages/WheaterPage';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
        <Routes>
          <Route path='/' element={<WheaterPage/>}/>
        </Routes>
    </Provider>
  );
}

export default App;
