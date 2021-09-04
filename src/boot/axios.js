import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://gateway.marvel.com:443/v1/public',
    params: {
        apikey: process.env.VUE_APP_API_KEY,
    }
})

export default instance;