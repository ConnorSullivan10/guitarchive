import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getUserGuitarsByGuitarId = (guitarId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/userGuitars.json?orderBy="guitarId"&equalTo="${guitarId}"`)
    .then((result) => {
      const allUserGuitarsObj = result.data;
      const userGuitars = [];
      if (allUserGuitarsObj != null) {
        Object.keys(allUserGuitarsObj).forEach((userGuitarId) => {
          const newUserGuitar = allUserGuitarsObj[userGuitarId];
          newUserGuitar.id = userGuitarId;
          userGuitars.push(newUserGuitar);
        });
      }
      resolve(userGuitars);
    })
    .catch((err) => {
      reject(err);
    });
});


const getLoneUserGuitar = (userGuitarId) => axios.get(`${baseUrl}/userGuitars/${userGuitarId}.json`);

const saveNewUserGuitar = (newUserGuitar) => axios.post(`${baseUrl}/userGuitars.json`, newUserGuitar);

const deleteUserGuitar = (userGuitarId) => axios.delete(`${baseUrl}/userGuitars/${userGuitarId}.json`);

export default {
  getUserGuitarsByGuitarId,
  getLoneUserGuitar,
  saveNewUserGuitar,
  deleteUserGuitar,
};
