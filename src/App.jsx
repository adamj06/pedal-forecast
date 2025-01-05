import Search from './components/Search'

function App() {
  const handleSearch = (search) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${import.meta.env.VITE_OPENWEATHERMAP_API_KEY}`
    )
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
    })
  }

  return (
    <>
      <Search onSearch={handleSearch} />
    </>
  )
}

export default App
