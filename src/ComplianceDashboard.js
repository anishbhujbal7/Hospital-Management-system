import React from 'react';

const ComplianceDashboard = () => {
  const actions = [
    {
      title: 'Regular Security Audits',
      description: 'Conduct comprehensive security audits every quarter to identify vulnerabilities and ensure compliance with HIPAA’s security rule. The audits should focus on data encryption, network security, and incident response protocols.'
    },
    {
      title: 'Update Data Protection Protocols',
      description: 'Review and update data protection policies at least annually. This includes revising access controls, reviewing backup procedures, and enhancing encryption measures for data storage and transmission.'
    },
    {
      title: 'Verify Access Controls',
      description: 'Ensure that only authorized personnel have access to patient data by regularly reviewing user permissions. Implement strong multi-factor authentication and ensure strict logging and monitoring of access to sensitive information.'
    },
    {
      title: 'Employee Training on Privacy',
      description: 'Conduct mandatory annual training sessions for all employees on HIPAA regulations, privacy practices, and security policies to ensure that they understand their role in protecting patient information.'
    },
    {
      title: 'Incident Response Plan Testing',
      description: 'Test the incident response plan regularly by simulating potential data breaches or security incidents. Ensure that all team members are familiar with their responsibilities in the event of a breach.'
    },
    {
      title: 'Monitor Third-Party Vendors',
      description: 'Ensure that all third-party vendors handling patient data comply with HIPAA regulations. Establish Business Associate Agreements (BAAs) with vendors and regularly review their security practices.'
    }
  ];

  return (
    <section className="compliance-dashboard">
      <h2>HIPAA Compliance Dashboard</h2>
      <div className="compliance-status">
        <p>Status: <strong className="compliant">Compliant</strong></p>
        <div className="compliance-actions">
          <h3>Actions Required:</h3>
          <ul>
            {actions.map((action, index) => (
              <li key={index} className="action-item">
                <div className="action-content">
                  <strong>{action.title}:</strong>
                  <p>{action.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ComplianceDashboard;
