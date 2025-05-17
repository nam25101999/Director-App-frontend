const express = require('express');
const router = express.Router();
const api = require('../services/apiService');  // giả sử có service gọi API

router.get('/notifications', async (req, res) => {
  try {
    const response = await api.getData('/notifications');
    const notifications = response.data || response;

    res.render('notifications', { notifications });
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu thông báo:', error);
    res.status(500).send('Không thể hiển thị dữ liệu thông báo.');
  }
});

module.exports = router;
