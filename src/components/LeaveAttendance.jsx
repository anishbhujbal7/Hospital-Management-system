import { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isWeekend } from 'date-fns';
import { FaPaperPlane } from 'react-icons/fa';

function LeaveAttendance() {
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [leaveForm, setLeaveForm] = useState({
    doctorId: '',
    reason: '',
    startDate: '',
    endDate: '',
    details: '',
  });

  // Mock attendance data
  const attendanceData = {
    present: ['2024-03-01', '2024-03-02', '2024-03-05', '2024-03-06', '2024-03-07'],
    absent: ['2024-03-03', '2024-03-04', '2024-03-08']
  };

  const getDaysInMonth = (date) => {
    const start = startOfMonth(date);
    const end = endOfMonth(date);
    return eachDayOfInterval({ start, end });
  };

  const getAttendanceStatus = (date) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    if (attendanceData.present.includes(dateStr)) return 'present';
    if (attendanceData.absent.includes(dateStr)) return 'absent';
    return '';
  };

  const handleLeaveFormChange = (e) => {
    const { name, value } = e.target;
    setLeaveForm(prev => ({ ...prev, [name]: value }));
  };

  const handleLeaveSubmit = (e) => {
    e.preventDefault();
    console.log(leaveForm);
    // Add leave submission logic here
  };

  const daysInMonth = getDaysInMonth(selectedMonth);

  return (
    <div className="dashboard-container">
      <h2>Leave & Attendance Management</h2>

      <div className="attendance-leave-container">
        <div className="attendance-section">
          <h3>Attendance Record</h3>
          <div className="form-group">
            <label htmlFor="month">Select Month</label>
            <input
              type="month"
              id="month"
              value={format(selectedMonth, 'yyyy-MM')}
              onChange={(e) => setSelectedMonth(new Date(e.target.value))}
              className="month-picker"
            />
          </div>

          <div className="calendar">
            <div className="calendar-header">
              <div>Sun</div>
              <div>Mon</div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thu</div>
              <div>Fri</div>
              <div>Sat</div>
            </div>
            <div className="calendar-body">
              {daysInMonth.map(date => (
                <div
                  key={date.toString()}
                  className={`calendar-day ${getAttendanceStatus(date)} ${isWeekend(date) ? 'weekend' : ''}`}
                >
                  {format(date, 'd')}
                </div>
              ))}
            </div>
          </div>

          <div className="attendance-summary">
            <div className="summary-item">
              <span>Present Days:</span>
              <span className="present-count">{attendanceData.present.length}</span>
            </div>
            <div className="summary-item">
              <span>Absent Days:</span>
              <span className="absent-count">{attendanceData.absent.length}</span>
            </div>
          </div>
        </div>

        <div className="leave-application">
          <h3>Apply for Leave</h3>
          <form onSubmit={handleLeaveSubmit}>
            <div className="form-group">
              <label htmlFor="doctorId">Doctor ID</label>
              <input
                type="text"
                id="doctorId"
                name="doctorId"
                value={leaveForm.doctorId}
                onChange={handleLeaveFormChange}
                placeholder="Enter your Doctor ID"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="reason">Reason for Leave</label>
              <textarea
                id="reason"
                name="reason"
                value={leaveForm.reason}
                onChange={handleLeaveFormChange}
                placeholder="Enter reason for leave"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="startDate">Start Date</label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={leaveForm.startDate}
                onChange={handleLeaveFormChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="endDate">End Date</label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                value={leaveForm.endDate}
                onChange={handleLeaveFormChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="details">Additional Details</label>
              <textarea
                id="details"
                name="details"
                value={leaveForm.details}
                onChange={handleLeaveFormChange}
                placeholder="Enter any additional details"
              />
            </div>

            <button type="submit" className="submit-button">
              <FaPaperPlane /> Submit Leave Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LeaveAttendance;