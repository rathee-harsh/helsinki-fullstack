import axios from "axios";

const BASE_URL = "http://api.weatherapi.com/v1"

const getWeather = (city) => {
    const params = {
        key: import.meta.env.VITE_SOME_KEY,
        q: city
    }
    const URL = `${BASE_URL}/current.json`
    return axios.get(URL, { params }).then(response => response.data)
}

export default getWeather