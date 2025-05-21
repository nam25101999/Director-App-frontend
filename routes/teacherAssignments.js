// routes/teacherAssignments.js
const express = require('express');
const router = express.Router();
const api = require('../services/apiService');

router.get('/teacher-assignments', async (req, res) => {
  try {
    const response = await api.getData('/teacherassignments');
    const assignments = response.data || response;

    res.render('teacherAssignments', { assignments });
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu phân công giáo viên:', error);
    res.status(500).send('Không thể hiển thị dữ liệu phân công giáo viên.');
  }
});

module.exports = router;
