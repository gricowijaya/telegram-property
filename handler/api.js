require('dotenv').config()
const axios = require('axios')
const API = process.env.API 

async function getTotal() {
  let total_property = await axios.get(`${API}/api/property/total`);
  return total_property.data
}

async function getKost() {
  let kost = await axios.get(`${API}/api/property/kost`) 
  return kost.data;
}

async function getHouse() {
  let house = await axios.get(`${API}/api/property/house`) 
  return house.data;
}

async function getLandForSale() {
  let landForSale = await axios.get(`${API}/api/property`)
  return landForSale.data;
}

async function getLocation() {
  let locations = await axios.get(`${API}/api/property/location`)
  return locations.data;
}

module.exports = { getHouse, getLandForSale, getTotal, getKost, getHouse, getLocation }
