const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middleware/auth')
// Trang login GET
router.get('/login', (req, res) => {
  res.render('login', { error: null });
});

// Xử lý đăng nhập POST
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Ví dụ đơn giản: kiểm tra username và password hardcoded
  if (username === 'admin' && password === '1') {
    // Lưu thông tin user vào session
    req.session.user = {
      username: 'admin',
      role: 'Admin',
      email: 'admin@example.com', // có thể thêm email để hiển thị trong profile
    };

    res.redirect('/');
  } else {
    res.render('login', { error: 'Tên đăng nhập hoặc mật khẩu không đúng' });
  }
});

// Profile
router.get('/profile', isAuthenticated, (req, res) => {
  const user = req.session.user;
  res.render('profile', { user });
});

// Đăng xuất
router.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      console.error('Lỗi khi đăng xuất:', err);
      return res.redirect('/');
    }
    res.redirect('/login');
  });
});

module.exports = router;
