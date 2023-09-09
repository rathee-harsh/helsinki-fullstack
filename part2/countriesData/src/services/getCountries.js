import axios from "axios"

const SEARCH_URL = "https://studies.cs.helsinki.fi/restcountries/api/all"

const getCountries = (search) => (
    axios.get(SEARCH_URL).then(
        response => response.data.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))
    )
)

export default getCountries