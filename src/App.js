import React from 'react';
import Header from './Header';
import ComplianceDashboard from './ComplianceDashboard';
import GovernmentIntegration from './GovernmentIntegration';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <Header />
      <ComplianceDashboard />
      <GovernmentIntegration />
    </div>
  );
}

export default App;
