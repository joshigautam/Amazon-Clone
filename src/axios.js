import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5001/clone-a16f7/us-central1/api', // the API (cloud function URL) URL
});

export default instance;
