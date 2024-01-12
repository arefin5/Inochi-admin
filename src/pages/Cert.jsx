// div className="d-1"

// src/App.js
import React, { useState } from 'react';
import CertificateForm from '../components/CertificateForm';
import CertificatePreview from '../components/CertificatePreview';

const Cert = () => {
  const [certificateData, setCertificateData] = useState(null);
  const handleGenerate = (recipientName) => {
    setCertificateData({ recipientName });
  };
  return (
    <div div className="" >
      <CertificateForm onGenerate={handleGenerate} />
      {certificateData && <CertificatePreview {...certificateData} />}
    </div>
  );
};

export default Cert;
