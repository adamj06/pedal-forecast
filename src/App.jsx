import { useState } from 'react'

import Search from './components/Search'
import WeatherDisplay from './components/WeatherDisplay'

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (placeName) => {
    setIsLoading(true);
    setError('');

    try {
      const apiKey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY || process.env.REACT_OPENWEATHERMAP_API_KEY;
      if (!apiKey) {
        throw new Error('API key is not defined');
      }

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${placeName}&units=metric&appid=${apiKey}`
      );
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      setWeatherData(data);

    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <Search onSearch={fetchWeather} />
      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error.message}</p>}
      <WeatherDisplay data={weatherData} />
    </div>
  )
}

export default App
