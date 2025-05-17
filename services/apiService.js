const axios = require('axios');
const BASE_URL = process.env.API_URL || 'http://localhost:5000/api';

const getData = async (endpoint) => {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`);
    return response.data;
  } catch (error) {
    console.error(`Lỗi khi gọi API ${endpoint}:`, error.message);
    return [];
  }
};

module.exports = { getData };
