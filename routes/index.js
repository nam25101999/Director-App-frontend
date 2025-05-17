const express = require('express');
const router = express.Router();
const api = require('../services/apiService');

// Trang báo cáo tổng hợp
router.get('/reports', async (req, res) => {
  try {
    const grades = await api.getData('/grades');
    const testScores = await api.getData('/test-scores');
    const internships = await api.getData('/internship-registrations');
    const internshipReports = await api.getData('/internship-reports');
    const teacherAssignments = await api.getData('/teacher-assignments');
    const teachingSchedule = await api.getData('/teaching-schedule');

    res.render('reports', {
      grades,
      testScores,
      internships,
      internshipReports,
      teacherAssignments,
      teachingSchedule
    });
  } catch (error) {
    console.error('Lỗi khi lấy báo cáo:', error.message);
    res.status(500).send('Không thể hiển thị báo cáo.');
  }
});

module.exports = router;
