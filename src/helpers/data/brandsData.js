import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllBrands = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/brands.json`)
    .then((result) => {
      const allBrandsObj = result.data;
      const brands = [];
      if (allBrandsObj != null) {
        Object.keys(allBrandsObj).forEach((brandId) => {
          const newBrand = allBrandsObj[brandId];
          newBrand.id = brandId;
          brands.push(newBrand);
        });
      }
      resolve(brands);
    })
    .catch((err) => {
      reject(err);
    });
});

const getSingleBrand = (brandId) => axios.get(`${baseUrl}/brands/${brandId}.json`);

export default {
  getAllBrands,
  getSingleBrand,
};
