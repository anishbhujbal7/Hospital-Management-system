import { useState } from 'react';

function LeaveStatus() {
  const [leaveApplications] = useState([
    {
      id: 'LA001',
      startDate: '2024-03-15',
      endDate: '2024-03-17',
      reason: 'Family function',
      status: 'Approved',
      approvedBy: 'Dr. Smith',
      approvalDate: '2024-03-10'
    },
    {
      id: 'LA002',
      startDate: '2024-03-20',
      endDate: '2024-03-22',
      reason: 'Medical emergency',
      status: 'Pending',
      approvedBy: null,
      approvalDate: null
    }
  ]);

  return (
    <div className="dashboard-container">
      <h2>Leave Application Status</h2>
      <div className="leave-status-grid">
        {leaveApplications.map(application => (
          <div 
            key={application.id} 
            className={`leave-status-card ${application.status.toLowerCase()}`}
          >
            <div className="leave-status-header">
              <h3>Application #{application.id}</h3>
              <span className={`status-badge ${application.status.toLowerCase()}`}>
                {application.status}
              </span>
            </div>
            <div className="leave-details">
              <p><strong>Duration:</strong> {application.startDate} to {application.endDate}</p>
              <p><strong>Reason:</strong> {application.reason}</p>
              {application.status === 'Approved' && (
                <>
                  <p><strong>Approved By:</strong> {application.approvedBy}</p>
                  <p><strong>Approval Date:</strong> {application.approvalDate}</p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeaveStatus;