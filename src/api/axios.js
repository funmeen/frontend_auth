import axios from 'axios';

export default axios.create({
    baseURL: 'https://ec2-18-141-41-29.ap-southeast-1.compute.amazonaws.com/api/user'
});