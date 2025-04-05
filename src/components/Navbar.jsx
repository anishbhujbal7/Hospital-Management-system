import { FaBars, FaHospital } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Navbar({ toggleSidebar }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logout logic here
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button onClick={toggleSidebar}>
          <FaBars size={24} />
        </button>
        <FaHospital size={24} />
        <h1>City Hospital</h1>
      </div>
      <div className="navbar-right">
        <button onClick={() => navigate('/about')}>About Us</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;