import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-clone-c9d18.cloudfunctions.net/api'
})
export default instance;


// http://localhost:5001/clone-c9d18/us-central1/api