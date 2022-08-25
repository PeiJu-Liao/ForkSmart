module.exports = {
  ensureAuthenticated: function (req, res, next) {
    if (req.isAuthenticated()) {
      req.flash('member_situation', '登入')
      return next();
    }
    req.flash('warning_msg', '請先登入會員，才能查看內容呦。');
    res.redirect('/users/login');
  },
  forwardAuthenticated: function (req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    }
    res.redirect('/');
  }
};
