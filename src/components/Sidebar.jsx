import { Link } from 'react-router-dom';
import { FaTimes, FaHome, FaUserPlus, FaGraduationCap, FaCalendarAlt, FaClipboardList } from 'react-icons/fa';

function Sidebar({ isOpen, onClose }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <button onClick={onClose}>
          <FaTimes size={24} />
        </button>
      </div>
      <nav className="sidebar-nav">
        <Link to="/dashboard" onClick={onClose}>
          <FaHome /> Doctor Dashboard
        </Link>
        <Link to="/onboarding" onClick={onClose}>
          <FaUserPlus /> Onboarding
        </Link>
        <Link to="/qualifications" onClick={onClose}>
          <FaGraduationCap /> Doctor Qualifications
        </Link>
        <Link to="/leave-attendance" onClick={onClose}>
          <FaCalendarAlt /> Leave & Attendance
        </Link>
        <Link to="/leave-status" onClick={onClose}>
          <FaClipboardList /> Leave Application Status
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;