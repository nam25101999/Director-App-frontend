const express = require('express');
const router = express.Router();
const api = require('../services/apiService');

router.get('/feedback', async (req, res) => {
  try {
    const response = await api.getData('/feedback'); // Lấy dữ liệu feedback từ API backend
    const feedbacks = response.data || response;

    res.render('feedback', { feedbacks });
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu phản hồi:', error.message);
    res.status(500).send('Không thể hiển thị dữ liệu phản hồi.');
  }
});

module.exports = router;
