import { useState } from 'react';
import { FaSave } from 'react-icons/fa';

function DoctorQualifications() {
  const [qualifications, setQualifications] = useState({
    specialization: '',
    degree: '',
    university: '',
    yearOfCompletion: '',
    experience: '',
    previousHospitals: '',
    certifications: '',
    research: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQualifications(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(qualifications);
    // Add submission logic here
  };

  return (
    <div className="form-container">
      <h2>Doctor Qualifications</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="specialization" className="visually-hidden">Specialization</label>
          <input
            type="text"
            id="specialization"
            name="specialization"
            value={qualifications.specialization}
            onChange={handleChange}
            placeholder="Enter your specialization"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="degree" className="visually-hidden">Degree</label>
          <input
            type="text"
            id="degree"
            name="degree"
            value={qualifications.degree}
            onChange={handleChange}
            placeholder="Enter your degree"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="university" className="visually-hidden">University</label>
          <input
            type="text"
            id="university"
            name="university"
            value={qualifications.university}
            onChange={handleChange}
            placeholder="Enter your university"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="yearOfCompletion" className="visually-hidden">Year of Completion</label>
          <input
            type="number"
            id="yearOfCompletion"
            name="yearOfCompletion"
            value={qualifications.yearOfCompletion}
            onChange={handleChange}
            placeholder="Enter year of completion"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="experience" className="visually-hidden">Years of Experience</label>
          <input
            type="number"
            id="experience"
            name="experience"
            value={qualifications.experience}
            onChange={handleChange}
            placeholder="Enter years of experience"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="previousHospitals" className="visually-hidden">Previous Hospitals</label>
          <textarea
            id="previousHospitals"
            name="previousHospitals"
            value={qualifications.previousHospitals}
            onChange={handleChange}
            placeholder="List previous hospitals and duration of service"
          />
        </div>

        <div className="form-group">
          <label htmlFor="certifications" className="visually-hidden">Certifications</label>
          <textarea
            id="certifications"
            name="certifications"
            value={qualifications.certifications}
            onChange={handleChange}
            placeholder="List relevant certifications"
          />
        </div>

        <div className="form-group">
          <label htmlFor="research" className="visually-hidden">Research Publications</label>
          <textarea
            id="research"
            name="research"
            value={qualifications.research}
            onChange={handleChange}
            placeholder="List research papers and publications"
          />
        </div>

        <button type="submit" className="submit-button">
          <FaSave /> Save Qualifications
        </button>
      </form>
    </div>
  );
}

export default DoctorQualifications;