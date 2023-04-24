import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Accept: 'application/json',
    },
    params: {
        api_key: '0618ef35b53b3c09c4f704b50702f123',
    },
});
