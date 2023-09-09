import { useEffect, useState } from 'react'
import Result from './components/Result'
import Search from './components/Search'
import getCountries from './services/getCountries'

function App() {
  const [result, setResult] = useState(null)
  const [search, setSearch] = useState('')
  const [temp, setTemp] = useState(null)
  const [windSpeed, setWindSpeed] = useState(null)
  const [conditionIcon, setConditionIcon] = useState(null)

  useEffect(() => {
    if (search) {
      getCountries(search).then(searchResult => setResult(searchResult))
    }
  }, [search])

  return (
    <>
      <Search search={search} setSearch={setSearch} />
      <Result result={result} setSearch={setSearch} temp={temp} windSpeed={windSpeed} conditionIcon={conditionIcon} setTemp={setTemp} setWindSpeed={setWindSpeed} setConditionIcon={setConditionIcon} />
    </>

  )
}

export default App
