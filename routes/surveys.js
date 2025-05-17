const express = require('express');
const router = express.Router();
const api = require('../services/apiService'); // gọi tới API nội bộ

router.get('/surveys', async (req, res) => {
  try {
    const response = await api.getData('/surveys'); // gọi API tới backend
    const surveys = response.data || response;

    res.render('surveys', { surveys });
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu khảo sát:', error.message);
    res.status(500).send('Không thể hiển thị dữ liệu khảo sát.');
  }
});

module.exports = router;
