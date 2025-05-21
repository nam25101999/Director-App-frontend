const express = require('express');
const router = express.Router();
const api = require('../services/apiService');

// GET /events - Hiển thị danh sách sự kiện
router.get('/events', async (req, res) => {
  try {
    const events = await api.getData('/events'); // lấy dữ liệu trực tiếp

    res.render('events', { events });
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu sự kiện:', error.message);
    res.status(500).send('Không thể hiển thị danh sách sự kiện.');
  }
});

module.exports = router;
