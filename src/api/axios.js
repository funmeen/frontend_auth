import axios from 'axios';

export default axios.create({
    baseURL: 'http://18.141.41.29:4000/api/user/'
});