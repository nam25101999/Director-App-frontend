function requireLogin(req, res, next) {
  if (req.session && req.session.user) {
    next(); // đã đăng nhập
  } else {
    res.redirect('/login'); // chưa đăng nhập → về trang login
  }
}

module.exports = { requireLogin };
