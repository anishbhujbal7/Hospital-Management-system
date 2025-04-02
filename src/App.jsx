import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import DoctorDashboard from './components/DoctorDashboard';
import Onboarding from './components/Onboarding';
import DoctorQualifications from './components/DoctorQualifications';
import LeaveAttendance from './components/LeaveAttendance';
import LeaveStatus from './components/LeaveStatus';
import AboutUs from './components/AboutUs';
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="app">
        <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<DoctorDashboard />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/qualifications" element={<DoctorQualifications />} />
            <Route path="/leave-attendance" element={<LeaveAttendance />} />
            <Route path="/leave-status" element={<LeaveStatus />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;