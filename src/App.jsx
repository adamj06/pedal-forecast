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
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${placeName}&units=metric&appid=${import.meta.env.VITE_OPENWEATHERMAP_API_KEY}`
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
    <>
      <Search onSearch={fetchWeather} />
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      <WeatherDisplay data={weatherData} />
    </>
  )
}

export default App
