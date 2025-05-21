const express = require('express');
const router = express.Router();
const api = require('../services/apiService');

// Route GET /kpi-performance
router.get('/kpi-performance', async (req, res) => {
  try {
    const response = await api.getData('/kpiperformance'); // đúng endpoint API backend
    const performances = response.data || response;

    res.render('kpiPerformance', { performances });
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu KPI Performance:', error.message);
    res.status(500).send('Không thể hiển thị dữ liệu KPI Performance.');
  }
});

module.exports = router;
