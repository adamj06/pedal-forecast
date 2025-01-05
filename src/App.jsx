import Search from './components/Search'

function App() {
  const handleSearch = (search) => {
    console.log(search)
  }

  return (
    <>
      <Search onSearch={handleSearch} />
    </>
  )
}

export default App
