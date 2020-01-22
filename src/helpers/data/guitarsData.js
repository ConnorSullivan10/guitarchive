import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getGuitarsByBrandId = (brandId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/guitars.json?orderBy="brandId"&equalTo="${brandId}"`)
    .then((result) => {
      const allGuitarsObj = result.data;
      const guitars = [];
      if (allGuitarsObj != null) {
        Object.keys(allGuitarsObj).forEach((guitarId) => {
          const newGuitar = allGuitarsObj[guitarId];
          newGuitar.id = guitarId;
          guitars.push(newGuitar);
        });
      }
      resolve(guitars);
    })
    .catch((err) => {
      reject(err);
    });
});

const getSingleGuitar = (guitarId) => axios.get(`${baseUrl}/guitars/${guitarId}.json`);

export default {
  getGuitarsByBrandId,
  getSingleGuitar,
};
