import React, { useState } from 'react';
import { FileUp, Clock, CheckCircle, XCircle } from 'lucide-react';

const InsuranceDashboard = () => {
  const [claims, setClaims] = useState([
    {
      id: 1,
      patientName: 'John Doe',
      policyNumber: 'POL123456',
      amount: 25000,
      status: 'pending',
      documents: ['medical_report.pdf'],
      date: '2024-03-15',
    },
    {
      id: 2,
      patientName: 'Jane Smith',
      policyNumber: 'POL789012',
      amount: 15000,
      status: 'approved',
      documents: ['prescription.pdf', 'bills.pdf'],
      date: '2024-03-10',
    },
  ]);

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (claimId) => {
    if (selectedFile) {
      setClaims(claims.map(claim => {
        if (claim.id === claimId) {
          return {
            ...claim,
            documents: [...claim.documents, selectedFile.name]
          };
        }
        return claim;
      }));
      setSelectedFile(null);
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending':
        return <Clock className="text-yellow-500" />;
      case 'approved':
        return <CheckCircle className="text-green-500" />;
      case 'rejected':
        return <XCircle className="text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-[#3A506B] mb-6">Insurance Claims Dashboard</h2>
      
      <div className="space-y-6">
        {claims.map((claim) => (
          <div key={claim.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-[#3A506B]">{claim.patientName}</h3>
                <p className="text-gray-600">Policy: {claim.policyNumber}</p>
              </div>
              <div className="flex items-center space-x-2">
                {getStatusIcon(claim.status)}
                <span className="capitalize">{claim.status}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-gray-600">Amount</p>
                <p className="font-semibold">₹{claim.amount}</p>
              </div>
              <div>
                <p className="text-gray-600">Date Filed</p>
                <p className="font-semibold">{claim.date}</p>
              </div>
            </div>
            
            <div className="border-t pt-4">
              <h4 className="font-semibold mb-2">Documents</h4>
              <ul className="space-y-2 mb-4">
                {claim.documents.map((doc, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <FileUp size={16} />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex items-center space-x-4">
                <input
                  type="file"
                  onChange={(e) => setSelectedFile(e.target.files[0])}
                  className="hidden"
                  id={`file-upload-${claim.id}`}
                />
                <label
                  htmlFor={`file-upload-${claim.id}`}
                  className="cursor-pointer bg-[#F4EBDC] text-[#3A506B] py-2 px-4 rounded-md hover:bg-[#D8C3A5] transition-colors"
                >
                  Upload Document
                </label>
                {selectedFile && (
                  <button
                    onClick={() => handleFileUpload(claim.id)}
                    className="bg-[#3A506B] text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors"
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsuranceDashboard;