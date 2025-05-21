const express = require('express');
const router = express.Router();
const api = require('../services/apiService');

router.get('/grades', async (req, res) => {
  try {
    const grades = await api.getData('/grades');
    res.render('grades', { grades });
  } catch (error) {
    console.error('❌ Lỗi khi gọi API /grades:', error.response?.data || error.message);
    res.status(500).send('Không thể hiển thị bảng điểm.');
  }
});

module.exports = router;
