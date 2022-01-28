import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/countriesList' element={<CountriesList countries={countries} />} />
        <Route path=':id' element={<CountryDetails countries={countries} />} />
      </Routes>
    </div>
  );
}

export default App;
