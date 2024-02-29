import axios from 'axios';

export default axios.create({
    baseURL: 'https://thick-places-hope.loca.lt/',
    headers: {
        'bypass-tunnel-reminder': 'true' // Set any value for the header
      }
});