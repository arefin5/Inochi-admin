// CertificatePreview.jsx
import React from 'react';
import html2pdf from 'html2pdf.js';

const CertificatePreview = ({ recipientName }) => {
  const handleDownload = () => {
    const containerElement = document.getElementById('certificate-container');

    html2pdf(containerElement, {
      margin: 10,
      filename: 'certificate.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    });
  };

  return (
    <>
      <div id="certificate-container">
        <h2>Certificate of Achievement</h2>
        <p>This is to certify that</p>
        <p>{recipientName}</p>
        <p>has successfully completed the course.</p>
        <img src="./certificate.png" alt="Certificate Image" />
      </div>
      <button onClick={handleDownload}>Download as PDF</button>

    </>
  );
};

export default CertificatePreview;
