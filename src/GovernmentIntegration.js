import React, { useState } from 'react';

const GovernmentIntegration = () => {
  const [formData, setFormData] = useState({
    patientId: '',
    name: '',
    dob: '',
    address: '',
    contact: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form Data Submitted:', formData);
  };

  return (
    <section className="government-integration">
      <h2>Government Health Registry Integration</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="patient-id">Patient ID:</label>
        <input
          type="text"
          id="patient-id"
          name="patientId"
          value={formData.patientId}
          onChange={handleChange}
          required
        />

        <label htmlFor="name">Full Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="dob">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <label htmlFor="contact">Contact Number:</label>
        <input
          type="text"
          id="contact"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          required
        />

        <button type="submit">Update Information</button>
      </form>
    </section>
  );
}

export default GovernmentIntegration;
