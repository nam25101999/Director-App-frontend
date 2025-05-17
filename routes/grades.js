// routes/grades.js
const express = require('express');
const router = express.Router();
const api = require('../services/apiService');

router.get('/grades', async (req, res) => {
  try {
    const response = await api.getData('/grades');
    const grades = response.data || response; // tùy API trả về

    res.render('grades', { grades });
  } catch (error) {
    console.error('Lỗi khi lấy grades:', error);
    res.status(500).send('Không thể hiển thị bảng điểm.');
  }
});

module.exports = router;
