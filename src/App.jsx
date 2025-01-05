import { useState } from 'react'

import Search from './components/Search'
import WeatherDisplay from './components/WeatherDisplay'

function App() {
  const [weatherData, setWeatherData] = useState(null)

  const handleSearch = (search) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${import.meta.env.VITE_OPENWEATHERMAP_API_KEY}`
    )
    .then((res) => {
      if (!res.ok) {
      throw new Error('Network response was not ok')
      }

      return res.json()
    })
    .then((data) => {
      setWeatherData(data)
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error)
    })
  }

  return (
    <>
      <Search onSearch={handleSearch} />
      <WeatherDisplay data={weatherData} />
    </>
  )
}

export default App
