import { useState } from 'react';

function Onboarding() {
  const generateDoctorId = () => {
    return 'DOC' + Math.floor(1000 + Math.random() * 9000);
  };

  const [formData, setFormData] = useState({
    doctorId: generateDoctorId(),
    name: '',
    age: '',
    dateOfBirth: '',
    contact: '',
    email: '',
    address: '',
    availableDays: {
      Monday: false,
      Tuesday: false,
      Wednesday: false,
      Thursday: false,
      Friday: false,
      Saturday: false,
      Sunday: false
    },
    customTimings: [{ startTime: '', endTime: '' }]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDayChange = (day) => {
    setFormData(prev => ({
      ...prev,
      availableDays: {
        ...prev.availableDays,
        [day]: !prev.availableDays[day]
      }
    }));
  };

  const handleTimingChange = (index, field, value) => {
    const newTimings = [...formData.customTimings];
    newTimings[index] = { ...newTimings[index], [field]: value };
    setFormData(prev => ({ ...prev, customTimings: newTimings }));
  };

  const addTimingSlot = () => {
    setFormData(prev => ({
      ...prev,
      customTimings: [...prev.customTimings, { startTime: '', endTime: '' }]
    }));
  };

  const removeTimingSlot = (index) => {
    if (formData.customTimings.length > 1) {
      const newTimings = formData.customTimings.filter((_, i) => i !== index);
      setFormData(prev => ({ ...prev, customTimings: newTimings }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add submission logic here
  };

  return (
    <div className="form-container">
      <h2>Doctor Onboarding</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="doctorId">Doctor ID</label>
          <input
            type="text"
            id="doctorId"
            value={formData.doctorId}
            readOnly
            className="generated-id"
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your age"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contact">Contact</label>
          <input
            type="tel"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Enter your contact number"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Residence Address</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your residence address"
            required
          />
        </div>

        <div className="form-group">
          <h3>Available Days</h3>
          <div className="days-grid">
            {Object.keys(formData.availableDays).map(day => (
              <div key={day} className="day-checkbox">
                <input
                  type="checkbox"
                  id={day}
                  checked={formData.availableDays[day]}
                  onChange={() => handleDayChange(day)}
                />
                <label htmlFor={day}>{day}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="form-group timing-section">
          <h3>Available Timings</h3>
          <div className="timing-slots">
            {formData.customTimings.map((timing, index) => (
              <div key={index} className="timing-slot">
                <div className="time-input-group">
                  <input
                    type="time"
                    value={timing.startTime}
                    onChange={(e) => handleTimingChange(index, 'startTime', e.target.value)}
                    required
                  />
                  <span className="time-separator">to</span>
                  <input
                    type="time"
                    value={timing.endTime}
                    onChange={(e) => handleTimingChange(index, 'endTime', e.target.value)}
                    required
                  />
                </div>
                {formData.customTimings.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeTimingSlot(index)}
                    className="remove-timing"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
          </div>
          <button type="button" onClick={addTimingSlot} className="add-timing">
            Add Another Time Slot
          </button>
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default Onboarding;