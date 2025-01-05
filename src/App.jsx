import { useState } from 'react'

import Search from './components/Search'
import WeatherDisplay from './components/WeatherDisplay'

function App() {
  const [weatherData, setWeatherData] = useState(null)

  const fetchWeather = async (placeName) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${placeName}&units=metric&appid=${import.meta.env.VITE_OPENWEATHERMAP_API_KEY}`
      )
      
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      
      const data = await response.json()
      setWeatherData(data)
      
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error)
    }
  }

  return (
    <>
      <Search onSearch={fetchWeather} />
      <WeatherDisplay data={weatherData} />
    </>
  )
}

export default App
