const express = require('express');
const router = express.Router();
const api = require('../services/apiService');

// GET /alumni - Hiển thị bảng Cựu sinh viên
router.get('/alumni', async (req, res) => {
  try {
    const alumni = await api.getData('/alumni'); // Gọi API để lấy danh sách cựu sinh viên

    res.render('alumni', { alumni });
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu cựu sinh viên:', error.response?.data || error.message);
    res.status(500).send('Không thể hiển thị dữ liệu cựu sinh viên.');
  }
});

module.exports = router;
