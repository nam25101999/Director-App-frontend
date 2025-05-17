const express = require('express');
const router = express.Router();
const api = require('../services/apiService');

// Route GET /kpi-performance
router.get('/kpi-performance', async (req, res) => {
  try {
    const response = await api.getData('/kpi-performance'); // Gọi API nội bộ
    const performances = response.data || response;

    res.render('kpiPerformance', { performances }); // render view trực tiếp từ views/kpiPerformance.ejs
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu KPI Performance:', error);
    res.status(500).send('Không thể hiển thị dữ liệu KPI Performance.');
  }
});

module.exports = router;
