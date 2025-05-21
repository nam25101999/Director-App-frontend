const express = require('express');
const router = express.Router();
const api = require('../services/apiService');

router.get('/test-scores', async (req, res) => {
  try {
    const response = await api.getData('/tests');
    const testScores = response.data ?? response; // Nếu response.data undefined thì lấy response

    res.render('testScore', { testScores });
  } catch (error) {
    console.error('Lỗi khi lấy test scores:', error.response?.data || error.message || error);
    res.status(500).send('Không thể hiển thị bảng điểm kiểm tra.');
  }
});

module.exports = router;
