// routes/internshipReports.js
const express = require('express');
const router = express.Router();
const api = require('../services/apiService');

router.get('/internship-reports', async (req, res) => {
  try {
    const response = await api.getData('/internship-reports');
    const reports = response.data || response;

    res.render('internshipReports', { reports });
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu báo cáo thực tập:', error);
    res.status(500).send('Không thể hiển thị dữ liệu báo cáo thực tập.');
  }
});

module.exports = router;
