

import React, { useState } from 'react';

import CertificateForm from '../components/CertificateForm';
import CertificatePreview from '../components/CertificatePreview';
import CertificatePreviewFirst from '../components/CertificatePreviewFirst';
// import CertificatePreviewLast from '../components/CertificatePreviewLast';
// import CertificeteLast from './CertificeteLast';
const CertificateSecend = () => {
  const [certificateData, setCertificateData] = useState(null);

  const handleGenerate = (formData) => {
    setCertificateData(formData);
  };

  return (
    <div className="d-1">
      <CertificateForm onGenerate={handleGenerate} />
      {certificateData && 
      <>
      {/* <CertificatePreview {...certificateData} />
       */}
      {/* <CertificatePreviewLast {...certificateData} /> */}
      <CertificatePreviewFirst {...certificateData}/>
      </>
      }
    </div>
  );
};


export default CertificateSecend;
