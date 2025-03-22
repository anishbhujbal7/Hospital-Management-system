import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar'; // Adjust the import path as needed
import Dashboard from './pages/Dashboard';
import HospitalCollaboration from './pages/HospitalCollaboration';
import HospitalDetails from './pages/HospitalDetails';
import CollaborationForm from './pages/CollaborationForm';
import ManageRequests from './pages/ManageRequests';
import AuditLog from './pages/AuditLog';
import AssignRole from './pages/AssignRole';
import ComplianceDashboard from './pages/ComplianceDashboard';
import GovernmentRegistry from './pages/GovernmentRegistry';
import AboutUs from './pages/AboutUs';


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="min-h-screen bg-base">
        <Navbar toggleSidebar={toggleSidebar} showMenuButton={true} />
        <div className="flex">
          <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
          <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
              <Route path="/hospitals" element={<HospitalCollaboration />} />
              <Route path="/hospitals/:id" element={<HospitalDetails />} />
              <Route path="/hospitals/:id/collaborate" element={<CollaborationForm />} />
              <Route path="/manage-requests/*" element={<ManageRequests />} />
              <Route path="/audit_log" element={<AuditLog />} />
              <Route path="/assign_role" element={<AssignRole />} />
              <Route path="/compliance-dashboard" element={<ComplianceDashboard />} />
              <Route path="/government-registry" element={<GovernmentRegistry />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="*" element={<Navigate to="/" />} />

            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;