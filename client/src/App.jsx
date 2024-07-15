import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "./components/Spinner";
import PublicRoute from "./components/PublicRoute";
import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./pages/Home/HomePage";
import AdminLogin from "./pages/Home/Login";
import PageNotFound from "./pages/Error404";
import "antd/dist/reset.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Student from "./pages/Dashboard/Student";
import Mentor from "./pages/Dashboard/Mentor";
import AddStudents from "./pages/Dashboard/AddStudents";
import Signup from "./pages/Dashboard/Signup";
import StudentProfile from "./pages/Dashboard/StudentProfile";
import MentorProfile from "./pages/Dashboard/MentorProfile";
import Schedule from "./pages/Dashboard/Schedule";
import AddLineSchedule from "./pages/Dashboard/AddLineSchedule";
import AddClassSchedule from "./pages/Dashboard/AddClassSchedule";
import ClassSchedule from "./pages/Dashboard/ViewClassSchedule";
import LineSchedule from "./pages/Dashboard/ViewLineSchedule";
import Blog from "./pages/Home/Blog";
import Gallery from "./pages/Home/Gallery";
import Team from "./pages/Home/Team";
import AddTestScore from "./pages/Dashboard/AddTestScore";
import Performance from "./pages/Dashboard/Performance";
import ViewTestScore from "./pages/Dashboard/ViewTestScore";
import TakeAttendance from "./pages/Dashboard/TakeAttendance";
import Attendance from "./pages/Dashboard/Attendance";
import AttendanceTable from "./pages/Dashboard/AttendanceTable";
import AddTopic from "./pages/Dashboard/AddTopic";
import FindTopic from "./pages/Dashboard/FindTopic";
import ConnectWithUs from "./pages/Home/ConnectWithUs";
import ChangePassword from "./components/Dashboard/ChangePassword";
import EditProfile from "./components/Dashboard/EditProfile";
import ChangeRole from "./pages/Dashboard/ChangeRole";
import EditStudent from "./pages/Dashboard/EditStudent";
import ForgotPassword from "./pages/Home/ForgotPassword";
const App = () => {
  const { loading } = useSelector((state) => state.alerts);

  return (
    <>
      <BrowserRouter>
        {loading ? (
          <Spinner />
        ) : (
          <Routes>
            <Route
              path="/Dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Scores"
              element={
                <ProtectedRoute>
                  <ViewTestScore />
                </ProtectedRoute>
              }
            />

            <Route
              path="/editStudent"
              element={
                <ProtectedRoute>
                  <EditStudent />
                </ProtectedRoute>
              }
            />
            <Route
              path="/changeRole"
              element={
                <ProtectedRoute>
                  <ChangeRole />
                </ProtectedRoute>
              }
            />
            <Route
              path="/editProfile"
              element={
                <ProtectedRoute>
                  <EditProfile />
                </ProtectedRoute>
              }
            />

            <Route
              path="/checkAttendance"
              element={
                <ProtectedRoute>
                  <Attendance />
                </ProtectedRoute>
              }
            />
            <Route
              path="/changePassword"
              element={
                <ProtectedRoute>
                  <ChangePassword />
                </ProtectedRoute>
              }
            />
            <Route
              path="/totalAttendance"
              element={
                <ProtectedRoute>
                  <AttendanceTable />
                </ProtectedRoute>
              }
            />
            <Route
              path="/findTopic"
              element={
                <ProtectedRoute>
                  <FindTopic />
                </ProtectedRoute>
              }
            />
            <Route
              path="/addTopic"
              element={
                <ProtectedRoute>
                  <AddTopic />
                </ProtectedRoute>
              }
            />
            <Route
              path="/takeAttendance"
              element={
                <ProtectedRoute>
                  <TakeAttendance />
                </ProtectedRoute>
              }
            />
            <Route
              path="/studentProfile"
              element={
                <ProtectedRoute>
                  <StudentProfile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/performance"
              element={
                <ProtectedRoute>
                  <Performance />
                </ProtectedRoute>
              }
            />
            <Route
              path="/mentorProfile"
              element={
                <ProtectedRoute>
                  <MentorProfile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/addLineSchedule"
              element={
                <ProtectedRoute>
                  <AddLineSchedule />
                </ProtectedRoute>
              }
            />
            <Route
              path="/addClassSchedule"
              element={
                <ProtectedRoute>
                  <AddClassSchedule />
                </ProtectedRoute>
              }
            />
            <Route
              path="/classSchedule"
              element={
                <ProtectedRoute>
                  <ClassSchedule />
                </ProtectedRoute>
              }
            />
            <Route
              path="/lineSchedule"
              element={
                <ProtectedRoute>
                  <LineSchedule />
                </ProtectedRoute>
              }
            />
            <Route
              path="/addTestScore"
              element={
                <ProtectedRoute>
                  <AddTestScore />
                </ProtectedRoute>
              }
            />

            <Route
              path="/Students"
              element={
                <ProtectedRoute>
                  <Student />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Schedule"
              element={
                <ProtectedRoute>
                  <Schedule />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Mentors"
              element={
                <ProtectedRoute>
                  <Mentor />
                </ProtectedRoute>
              }
            />
            <Route
              path="/AddStudents"
              element={
                <ProtectedRoute>
                  <AddStudents />
                </ProtectedRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <PublicRoute>
                  <Signup />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <AdminLogin />
                </PublicRoute>
              }
            />
            <Route
                path="/forgotPassword"
                element={
                  <PublicRoute>
                    <ForgotPassword />
                  </PublicRoute>
                }
              />
            <Route
              path="/blog"
              element={
                <PublicRoute>
                  <Blog />
                </PublicRoute>
              }
            />
            <Route
              path="/gallery"
              element={
                <PublicRoute>
                  <Gallery />
                </PublicRoute>
              }
            />
            <Route
              path="/team"
              element={
                <PublicRoute>
                  <Team />
                </PublicRoute>
              }
            />
            <Route
              path="/"
              element={
                <PublicRoute>
                  <HomePage />
                </PublicRoute>
              }
            />
            <Route
              path="/connectWithUs"
              element={
                <PublicRoute>
                  <ConnectWithUs />
                </PublicRoute>
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
};

export default App;
