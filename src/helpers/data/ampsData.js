import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

// const getLoneAmp = (ampId) => axios.get(`${baseUrl}/amps/${ampId}.json`);
const getLoneAmp = (ampId) => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/amps/${ampId}.json`)
    .then((result) => {
      resolve(result.data);
    })
    .catch((error) => reject(error));
});

export default { getLoneAmp };
