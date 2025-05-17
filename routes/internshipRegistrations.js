const express = require('express');
const router = express.Router();
const api = require('../services/apiService');

router.get('/internship-registrations', async (req, res) => {
  try {
    const response = await api.getData('/internship-registrations');
    const internships = response.data || response;

    res.render('internshipRegistrations', { internships });
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu đăng ký thực tập:', error);
    res.status(500).send('Không thể hiển thị dữ liệu đăng ký thực tập.');
  }
});

module.exports = router;
