const express = require('express');
const router = express.Router();
const api = require('../services/apiService');

router.get('/internship-registrations', async (req, res) => {
  try {
    const response = await api.getData('/internships'); // hoặc '/internships' tùy API
    const internships = response.data ?? response;

    res.render('internshipRegistrations', { internships });
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu đăng ký thực tập:', error.response?.data || error.message || error);
    res.status(500).send('Không thể hiển thị dữ liệu đăng ký thực tập.');
  }
});

module.exports = router;
