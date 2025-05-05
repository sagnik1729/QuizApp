import axios from 'axios';

export default axios.create({
    baseURL: 'https://opentdb.com/',
    timeout: 5000,
});