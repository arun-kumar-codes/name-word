import './App.css'
import SignInPage from './components/auth/SignIn';
import AuthGuard from './AuthGuard';
import Overview from './components/dashboard/Overview';
import DashboardLayout from './components/dashboard/DashboardLayout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './components/auth/Signup';
import OTPVerification from './components/auth/Otp';

function App() {

  return (
    <Router>
      <Routes>
      <Route
          path="/"
          element={
            <AuthGuard requireAuth={false}>
              < SignInPage/>
            </AuthGuard>
          }
        />
        <Route
          path="/SignIn"
          element={
            <AuthGuard requireAuth={false}>
              <SignInPage />
            </AuthGuard>
          }
        />
        <Route
          path="/signup"
          element={
            <AuthGuard requireAuth={false}>
              <SignUp />
            </AuthGuard>
          }
        />
        <Route
          path="/otp"
          element={
            <AuthGuard requireAuth={false}>
              <OTPVerification />
            </AuthGuard>
          }
        />
        <Route
          path="/dashboard"
          element={
            <AuthGuard requireAuth={false}>
              <DashboardLayout />
            </AuthGuard>
          }>
          <Route path="" element={<Overview />} />
          </Route>
      </Routes>
      </Router>
  )
}

export default App
