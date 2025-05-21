// routes/teachingSchedule.js
const express = require('express');
const router = express.Router();
const api = require('../services/apiService');

router.get('/teaching-schedule', async (req, res) => {
  try {
    const response = await api.getData('/teachingschedules');
    const schedule = response.data || response;

    res.render('teachingSchedule', { schedule });
  } catch (error) {
    console.error('Lỗi khi lấy lịch giảng dạy:', error.message);
    res.status(500).send('Không thể hiển thị lịch giảng dạy.');
  }
});

module.exports = router;
