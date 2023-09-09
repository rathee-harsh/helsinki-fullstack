import getWeather from "../services/getWeather"

const ImageRender = ({ imageURL }) => {
    if (imageURL) {
        return <img src={imageURL} />
    }
    return null
}

const DisplayWeather = ({ country, temp, windSpeed, conditionIcon, setTemp, setWindSpeed, setConditionIcon }) => {
    if (country.hasOwnProperty('capital')) {
        getWeather(country.capital[0]).then(response => {
            setTemp(response.current.temp_c)
            setWindSpeed(response.current.wind_kph)
            setConditionIcon(response.current.condition.icon)
        })
        return <div>
            <h1>Weather in {country.capital[0]}</h1>
            <p>temperature {temp} celsius</p>
            <ImageRender imageURL={conditionIcon} />
            <p>Wind {windSpeed} kph</p>
        </div>
    }
}

const Result = ({ result, setSearch, temp, windSpeed, conditionIcon, setTemp, setWindSpeed, setConditionIcon }) => {
    const handleButtonClick = (searchName) => {
        setSearch(searchName)
    }
    if (result === null) {
        return null
    }
    if (result.length > 10) {
        return (
            <div>
                Too many matches, specify another filter
            </div>
        )
    } else if (result.length == 1) {
        const country = result[0]
        const languages = []
        for (const language in country.languages) {
            languages.push([language, country.languages[language]])
        }

        return (
            <div>
                <h1>{country.name.common}</h1>
                <p>capital {country.hasOwnProperty('capital') ? country.capital[0] : ': No capital'}</p>
                <p>area {country.area}</p>
                <h3>languages:</h3>
                <ul>
                    {languages.map(language => <li key={language[0]}>{language[1]}</li>)}
                </ul>
                <img src={country.flags.png}></img>
                <DisplayWeather country={country} temp={temp} windSpeed={windSpeed} conditionIcon={conditionIcon} setTemp={setTemp} setWindSpeed={setWindSpeed} setConditionIcon={setConditionIcon} />
            </div>
        )
    }
    return (
        <div>
            {result.map(country =>
                <div key={country.name.official}>
                    <p>
                        {country.name.common}
                        <button onClick={() => { handleButtonClick(country.name.common) }}>show</button>
                    </p>
                </div>)}
        </div>
    )

}

export default Result