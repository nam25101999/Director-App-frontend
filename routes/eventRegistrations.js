const express = require('express');
const router = express.Router();
const api = require('../services/apiService');

router.get('/event-registrations', async (req, res) => {
  try {
    const response = await api.getData('/event-registrations');
    const registrations = response.data || response;

    res.render('eventRegistrations', { registrations });
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu đăng ký sự kiện:', error);
    res.status(500).send('Không thể hiển thị dữ liệu đăng ký sự kiện.');
  }
});

module.exports = router;
