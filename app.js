require('dotenv').config();
const express = require('express');
const path = require('path');
const session = require('express-session');
const { requireLogin } = require('./middleware/authMiddleware'); // import middleware kiểm tra đăng nhập

const app = express();

// 📦 Middleware Cấu hình
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'your-secret-key', // 🔒 Nên đặt trong .env (process.env.SESSION_SECRET)
  resave: false,
  saveUninitialized: true,
}));
app.use((req, res, next) => {
  res.locals.session = req.session;  // Đặt session thành biến local để EJS dùng
  next();
});


// 🎨 View Engine EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 🌐 Cấu hình các tuyến đường
const authRouter = require('./routes/auth');
const homeRouter = require('./routes/home');
const indexRoutes = require('./routes/index');
const gradesRouter = require('./routes/grades');
const testScoreRouter = require('./routes/testScore');
const internshipRegistrationsRouter = require('./routes/internshipRegistrations');
const internshipReportsRouter = require('./routes/internshipReports');
const teacherAssignmentsRouter = require('./routes/teacherAssignments');
const teachingScheduleRouter = require('./routes/teachingSchedule');
const kpiPerformanceRoutes = require('./routes/kpiPerformance');
const qualityAssessmentsRoute = require('./routes/qualityAssessments');
const aiAnalyticsRoute = require('./routes/aiAnalytics');
const surveysRoute = require('./routes/surveys');
const feedbackRoute = require('./routes/feedback');
const alumniRoute = require('./routes/alumni');
const eventRoutes = require('./routes/events');
const eventRegistrationRoutes = require('./routes/eventRegistrations');
const notificationRoutes = require('./routes/notifications');






// 🚪 Các route không yêu cầu đăng nhập
app.use('/', authRouter);

// 🔐 Các route yêu cầu đăng nhập
app.use('/', requireLogin, homeRouter);
app.use('/', requireLogin, indexRoutes);
app.use('/', requireLogin, gradesRouter);
app.use('/', requireLogin, testScoreRouter);
app.use('/', requireLogin, internshipRegistrationsRouter);
app.use('/', requireLogin, internshipReportsRouter);
app.use('/', requireLogin, teacherAssignmentsRouter);
app.use('/', requireLogin, teachingScheduleRouter);
app.use('/', requireLogin, kpiPerformanceRoutes);
app.use('/', requireLogin, qualityAssessmentsRoute);
app.use('/', requireLogin, aiAnalyticsRoute);
app.use('/', requireLogin, surveysRoute);
app.use('/', requireLogin, feedbackRoute);
app.use('/', requireLogin, alumniRoute);
app.use('/', requireLogin, eventRoutes);
app.use('/', requireLogin, eventRegistrationRoutes);
app.use('/', requireLogin, notificationRoutes);
// 🚀 Khởi động Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
