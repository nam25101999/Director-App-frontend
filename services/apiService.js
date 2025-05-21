const axios = require('axios');

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Đã có /api ở đây
  timeout: 5000,
});

module.exports = {
  getData: async (endpoint) => {
    try {
      const response = await api.get(endpoint);
      return response.data; // Chỉ trả về .data là đủ
    } catch (error) {
      console.error(`❌ Lỗi khi gọi API ${endpoint}:`, error.response?.data || error.message);
      throw error;
    }
  }
};
