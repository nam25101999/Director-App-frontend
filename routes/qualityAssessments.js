const express = require('express');
const router = express.Router();
const api = require('../services/apiService');

router.get('/quality-assessments', async (req, res) => {
  try {
    const response = await api.getData('/qualityassessmentresults'); // gọi tới API backend
    const results = response.data || response;

    res.render('qualityAssessments', { results });
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu đánh giá chất lượng:', error.message);
    res.status(500).send('Không thể hiển thị dữ liệu đánh giá chất lượng.');
  }
});

module.exports = router;
