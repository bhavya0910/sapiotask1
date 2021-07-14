import axios from "axios";


const countryAPI = "https://restcountries.eu/rest/v2/all";



export const fetchCountry = () => {
    return axios.get(countryAPI)};