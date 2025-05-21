const express = require('express');
const router = express.Router();
const api = require('../services/apiService');

router.get('/event-registrations', async (req, res) => {
  try {
    const registrations = await api.getData('/event-registrations'); // Lấy dữ liệu trực tiếp

    res.render('eventRegistrations', { registrations });
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu đăng ký sự kiện:', error.response?.data || error.message);
    res.status(500).send('Không thể hiển thị dữ liệu đăng ký sự kiện.');
  }
});

module.exports = router;
