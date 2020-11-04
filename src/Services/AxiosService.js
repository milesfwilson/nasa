import Axios from "axios";

export const api = Axios.create({
baseURL: 'https://api.nasa.gov',
timeout: 10000
})