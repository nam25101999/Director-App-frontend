const express = require('express');
const router = express.Router();
const api = require('../services/apiService');

router.get('/ai-analytics', async (req, res) => {
  try {
    const response = await api.getData('/ai-analytics');
    const analytics = response.data || response;

    res.render('aiAnalytics', { analytics });
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu AI Analytics:', error.message);
    res.status(500).send('Không thể hiển thị dữ liệu phân tích AI.');
  }
});

module.exports = router;
