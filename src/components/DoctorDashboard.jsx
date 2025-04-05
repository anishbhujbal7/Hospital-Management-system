import { useState } from 'react';
import { FaUserMd, FaCalendarCheck, FaClipboardList } from 'react-icons/fa';

function DoctorDashboard() {
  const [doctorName] = useState('Dr. John Doe');
  const [appointments] = useState([
    {
      id: 1,
      patientName: 'Alice Smith',
      date: '2024-03-20',
      time: '10:00 AM',
      type: 'General Checkup',
      status: 'Confirmed'
    },
    {
      id: 2,
      patientName: 'Bob Johnson',
      date: '2024-03-20',
      time: '11:00 AM',
      type: 'Follow-up',
      status: 'Pending'
    },
  ]);

  const [messages] = useState([
    {
      id: 1,
      text: 'Staff meeting tomorrow at 9 AM',
      priority: 'high',
      time: '2 hours ago'
    },
    {
      id: 2,
      text: 'New COVID-19 guidelines updated',
      priority: 'medium',
      time: '4 hours ago'
    },
  ]);

  const stats = {
    totalPatients: 150,
    appointmentsToday: 8,
    completedAppointments: 45,
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome back, {doctorName}</h1>
        <p className="current-date">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>
      
      <div className="dashboard-grid">
        <div className="stats-section">
          <h2>Quick Overview</h2>
          <div className="stats-cards">
            <div className="stats-card">
              <div className="stats-icon">
                <FaUserMd />
              </div>
              <div className="stats-info">
                <h3>Total Patients</h3>
                <div className="stats-number">{stats.totalPatients}</div>
              </div>
            </div>
            
            <div className="stats-card">
              <div className="stats-icon">
                <FaCalendarCheck />
              </div>
              <div className="stats-info">
                <h3>Today's Appointments</h3>
                <div className="stats-number">{stats.appointmentsToday}</div>
              </div>
            </div>
            
            <div className="stats-card">
              <div className="stats-icon">
                <FaClipboardList />
              </div>
              <div className="stats-info">
                <h3>Completed This Month</h3>
                <div className="stats-number">{stats.completedAppointments}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-section">
          <h2>Important Messages</h2>
          <div className="messages-list">
            {messages.map(message => (
              <div key={message.id} className={`message ${message.priority}`}>
                <div className="message-content">
                  <p>{message.text}</p>
                  <span className="message-time">{message.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-section">
          <h2>Upcoming Appointments</h2>
          <div className="appointments-list">
            {appointments.map(appointment => (
              <div key={appointment.id} className="appointment-card">
                <div className="appointment-header">
                  <h3>{appointment.patientName}</h3>
                  <span className={`appointment-status ${appointment.status.toLowerCase()}`}>
                    {appointment.status}
                  </span>
                </div>
                <div className="appointment-details">
                  <p>
                    <strong>Date:</strong> {appointment.date}
                  </p>
                  <p>
                    <strong>Time:</strong> {appointment.time}
                  </p>
                  <p>
                    <strong>Type:</strong> {appointment.type}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorDashboard;