import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getToneLegendsByGuitarId = (guitarId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/toneLegends.json?orderBy="legendGuitar"&equalTo="${guitarId}"`)
    .then((result) => {
      const allToneLegendsObj = result.data;
      const toneLegends = [];
      if (allToneLegendsObj != null) {
        Object.keys(allToneLegendsObj).forEach((toneLegendId) => {
          const newToneLegend = allToneLegendsObj[toneLegendId];
          newToneLegend.id = toneLegendId;
          toneLegends.push(newToneLegend);
        });
      }
      resolve(toneLegends);
    })
    .catch((err) => {
      reject(err);
    });
});


const getLoneLegend = (toneLegendId) => axios.get(`${baseUrl}/userGuitars/${toneLegendId}.json`);

export default {
  getToneLegendsByGuitarId,
  getLoneLegend,
};
